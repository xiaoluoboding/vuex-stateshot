import Vue from 'vue'
import { History } from 'stateshot'

const SCOPE_NAME = 'vuexstateshot'
const SYNC_STATE = 'SYNC_STATE'
const STATESHOT_UNDO = 'STATESHOT_UNDO'
const STATESHOT_REDO = 'STATESHOT_REDO'

class VuexStateshot {
  constructor (store, options) {
    const {
      actions = [],
      maxLength = 100
    } = options

    const history = new History({ maxLength })

    this.store = store
    this.actions = actions
    this.history = history

    Vue.prototype.$stateshot = history
  }

  registerPluginMoudle () {
    this.store.registerModule(SCOPE_NAME, {
      namespaced: true,
      state: {
        prevState: {},
        nextState: {},
        hasUndo: false,
        hasRedo: false,
        historyLength: 0
      },
      actions: {
        // snap a state shot of rootState
        stateshot: async ({ commit, dispatch, state, rootState }, payload) => {
          await this.history.pushSync(rootState)
          commit('SYNC_STATE', {
            hasUndo: this.history.hasUndo,
            hasRedo: this.history.hasRedo,
            historyLength: this.history.length
          })
        },
        undo: ({ commit, state }, payload) => {
          const prevState = this.history.undo().get()
          commit('STATESHOT_UNDO', prevState)
          return prevState
        },
        redo: ({ commit }, payload) => {
          const nextState = this.history.redo().get()
          commit('STATESHOT_REDO', nextState)
          return nextState
        }
      },
      mutations: {
        [SYNC_STATE] (state, payload) {
          Object.assign(state, payload)
        },
        [STATESHOT_UNDO] (state, prevState) {
          if (prevState) state.prevState = prevState
        },
        [STATESHOT_REDO] (state, nextState) {
          if (nextState) state.nextState = nextState
        }
      },
      getters: {
        hasUndo: state => state.hasUndo,
        hasRedo: state => state.hasRedo,
        historyLength: state => state.historyLength
      }
    })
  }

  snapStateshot () {
    this.store.dispatch(`${SCOPE_NAME}/stateshot`)
  }

  stateshotFromAction (store) {
    return {
      before: (action, state) => {
        console.log(
          '%cAction',
          'background: blue color: white padding: 2px 4px border-radius: 3px font-weight: bold',
          `${action.type}`
        )
      },
      after: (action, state) => {
        if (this.actions.includes(action.type)) {
          this.snapStateshot()
          console.log(
            '%cSync',
            'background: green color: white padding: 2px 4px border-radius: 3px font-weight: bold',
            `Sync State... length is: ${this.history.length}`
          )
        }
      }
    }
  }

  stateshotFromMutation (mutation) {

  }
}

export function createPlugin (options) {
  return store => {
    const plugin = new VuexStateshot(store, options)

    plugin.registerPluginMoudle()
    plugin.snapStateshot()

    store.subscribeAction(plugin.stateshotFromAction(store))
    store.subscribe((mutation, state) => plugin.stateshotFromMutation(mutation))
  }
}
