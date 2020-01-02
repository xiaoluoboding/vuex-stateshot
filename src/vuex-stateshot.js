import Vue from 'vue'
import { History } from 'stateshot'

const SCOPE_NAME = 'vuexstateshot'
const SYNC_STATE = '__SYNC_STATE__'
const STATESHOT_UNDO = 'STATESHOT_UNDO'
const STATESHOT_REDO = 'STATESHOT_REDO'

class VuexStateshot {
  constructor (store, modules, options) {
    const {
      // Max length saving history states, 100 by default.
      maxLength = 100,
      // Debounce time for push in milliseconds, 50 by default.
      delay = 50,
      ...others
    } = options

    const history = new History({
      maxLength: maxLength + 1,
      delay,
      ...others
    })

    // store state
    this.store = store
    this.modules = modules
    this.moduleNames = Object.keys(modules)
    this.rootModule = store._modules.root

    // subscribe state
    this.actions = this.getSubscribeTypes('actions')
    this.mutations = this.getSubscribeTypes('mutations')
    this.unsubscribeAction = null
    this.unsubscribe = null

    // history state
    this.history = history
    // console.log(this.store)
  }

  getHistoryLength () {
    /**
     * There is some wrong with the stateshot.js
     * The truely history length is $records we need filter the record
     * Otherwise when you call the undo().get(), the history.length is wrong
     */
    // const historyLength = this.history.length
    return this.history.$records.filter(record => record).length
  }

  /**
   * Get the wanted subscribe types with namespace
   * @param {*} context 'actions/mutations'
   */
  getSubscribeTypes (context) {
    let types = []

    for (const namespace of this.moduleNames) {
      const subscribe = this.modules[namespace][context]
      const mapedTypes = subscribe && subscribe.map(type => {
        return namespace === 'rootModule' ? type : `${namespace}/${type}`
      })
      types = [...types, mapedTypes]
    }

    const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

    return deepFlatten(types.filter(v => v))
  }

  findNamespacedModule (namespace, moduleTree = this.rootModule) {
    if (namespace === 'root') return this.rootModule
    const parts = namespace.split('/')
    if (!parts.length) return false

    const subtree = moduleTree._children[parts[0]]
    const subpath = parts.slice(1).join('/')
    if (subtree && subtree.namespaced) {
      return parts.length === 1 ? subtree : this.findNamespacedModule(subpath, subtree)
    } else {
      for (const name in moduleTree._children) {
        const namespacedMoudle = this.findNamespacedModule(namespace, moduleTree._children[name])
        if (namespacedMoudle) return namespacedMoudle
      }
    }

    return false
  }

  registerPluginMoudle () {
    this.store.registerModule(SCOPE_NAME, {
      namespaced: true,
      state: {
        prevState: {},
        nextState: {},
        hasUndo: false,
        hasRedo: false,
        historyLength: 0,
        undoCount: 0,
        redoCount: 0
      },
      actions: {
        // snap a state shot of rootState
        snapshot: ({ commit, dispatch, state, rootState }, payload) => {
          this.history.pushSync(rootState)

          const historyLength = this.getHistoryLength()

          commit(SYNC_STATE, {
            hasUndo: historyLength - 1 > 0,
            hasRedo: false,
            historyLength,
            undoCount: historyLength - 1,
            redoCount: 0
          })
        },
        undo: ({ commit, state }, payload) => {
          const { hasUndo } = state
          const prevState = this.history.undo().get()
          if (prevState && hasUndo) commit('STATESHOT_UNDO', prevState)
          return prevState
        },
        redo: ({ commit, state }, payload) => {
          const { hasRedo } = state
          const nextState = this.history.redo().get()
          if (nextState && hasRedo) commit('STATESHOT_REDO', nextState)
          return nextState
        },
        reset: ({ commit }, payload) => {
          this.history.reset()
          commit(SYNC_STATE, {
            nextState: {},
            prevState: {},
            hasUndo: false,
            hasRedo: false,
            historyLength: 0,
            undoCount: 0,
            redoCount: 0
          })
        }
      },
      mutations: {
        [SYNC_STATE] (state, payload) {
          Object.assign(state, payload)
        },
        [STATESHOT_UNDO] (state, prevState) {
          state.prevState = prevState
          state.undoCount -= 1
          if (state.undoCount === 0) state.hasUndo = false
          state.redoCount += 1
          state.hasRedo = state.redoCount > 0
        },
        [STATESHOT_REDO] (state, nextState) {
          state.nextState = nextState
          state.redoCount -= 1
          if (state.redoCount === 0) state.hasRedo = false
          state.undoCount += 1
          state.hasUndo = state.undoCount > 0
        }
      },
      getters: {
        hasUndo: state => state.hasUndo,
        hasRedo: state => state.hasRedo,
        undoCount: state => state.undoCount,
        redoCount: state => state.redoCount,
        historyLength: state => state.historyLength
      }
    })
  }

  syncState (namespace = 'root') {
    const { state } = this.findNamespacedModule(namespace, this.rootModule)
    this.store.dispatch(`${SCOPE_NAME}/snapshot`, state)
  }

  stateshotFromAction (store) {
    return {
      before: (action, state) => {
        console.log(
          '%cAction',
          'background: blue; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
          `${action.type}`
        )
      },
      after: (action, state) => {
        if (this.actions.includes(action.type)) {
          this.syncState()
          console.log(
            '%cSync',
            'background: green; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
            `Sync State... length is: ${this.history.length}`
          )
        }
      }
    }
  }

  stateshotFromMutation (mutation, state) {
    if (this.mutations.includes(mutation.type)) {
      this.syncState()
      console.log(
        '%cMutation',
        'background: green; color: white; padding: 2px 4px; border-radius: 3px; font-weight: bold;',
        `Sync State... length is: ${this.history.length}`
      )
    }
  }

  subscribeAction () {
    this.unsubscribeAction = this.store.subscribeAction(this.stateshotFromAction(this.store))
  }

  subscribe () {
    this.unsubscribe = this.store.subscribe((mutation, state) => this.stateshotFromMutation(mutation, state))
  }
}

export function createPlugin (modules, options = {}) {
  return store => {
    const plugin = new VuexStateshot(store, modules, options)

    plugin.registerPluginMoudle()
    plugin.syncState()
    plugin.subscribeAction()
    plugin.subscribe()

    Vue.prototype.$stateshot = plugin
  }
}
