import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex, { createNamespacedHelpers, mapState, mapMutations } from 'vuex'
import { createPlugin } from '../../lib/vuex-stateshot.umd.min'

const PLUGIN_NAME = 'vuexstateshot'

const logshot = vm => {
  console.group('【vuex-stateshot】')
  console.log(`does have undo: ${vm.hasUndo}`)
  console.log(`does have redo: ${vm.hasRedo}`)
  console.log(`undo count is: ${vm.undoCount}`)
  console.log(`redo count is: ${vm.redoCount}`)
  console.log(`history length: ${vm.historyLength}`)
  console.groupEnd()
}

function createComponent (namespace) {
  const helpers = createNamespacedHelpers(namespace)
  const stateshot = createNamespacedHelpers(PLUGIN_NAME)

  return {
    template: '<div></div>',
    computed: {
      ...mapState(['theme']),
      ...helpers.mapState(['color', 'lang']),
      ...stateshot.mapGetters(['hasUndo', 'hasRedo', 'undoCount', 'redoCount', 'historyLength'])
    },
    methods: {
      ...mapMutations(['setTheme']),
      ...helpers.mapActions(['setState', 'setLang']),
      ...helpers.mapMutations(['changeColor']),
      ...stateshot.mapActions(['snapshot', 'undo', 'redo', 'reset'])
    }
  }
}

function createStore (plugin) {
  return new Vuex.Store({
    state: { theme: 'light' },
    mutations: {
      setTheme: (state, payload) => { state.theme = payload }
    },
    modules: {
      // global(namespaced)
      global: {
        namespaced: true,
        state: {
          color: '#fff',
          lang: 'en'
        },
        actions: {
          setState: ({ commit }, payload) => { commit('setState', payload) },
          setLang: ({ commit }, payload) => {
            commit('setState', {
              lang: payload
            })
          }
        },
        mutations: {
          setState: (state, payload) => { Object.assign(state, payload) },
          changeColor: (state, payload) => { state.color = payload }
        },
        modules: {
          // global(namespaced)/widget(namespaced)
          widget: {
            namespaced: true,
            state: {
              color: '#000',
              lang: 'fr'
            },
            actions: {
              setState: ({ commit }, payload) => { commit('setState', payload) },
              setLang: ({ commit }, payload) => {
                commit('setState', {
                  lang: payload
                })
              }
            },
            mutations: {
              setState: (state, payload) => { Object.assign(state, payload) },
              changeColor: (state, payload) => { state.color = payload }
            }
          }
        }
      }
    },
    plugins: [plugin]
  })
}

function createApp (namespace = null) {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const vuexstateshotPlugin = createPlugin({
    rootModule: {
      mutations: ['setTheme']
    },
    global: {
      actions: ['setLang'],
      mutations: ['changeColor']
    },
    'global/widget': {
      actions: ['setLang'],
      mutations: ['changeColor']
    }
  }, {})

  const store = createStore(vuexstateshotPlugin)

  const component = createComponent(namespace)

  return shallowMount(component, {
    localVue,
    store
  })
}

export {
  logshot,
  createApp
}
