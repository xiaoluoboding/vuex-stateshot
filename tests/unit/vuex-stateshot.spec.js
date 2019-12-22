import { createLocalVue, mount } from '@vue/test-utils'
import flushPromises from 'flush-promises'
import Vuex, { createNamespacedHelpers, mapState, mapActions } from 'vuex'
import { createPlugin } from '../../src/vuex-stateshot'

describe.each([
  ['namespaced module', 'global', 'global']
  // ['namespaced module under namespaced module', 'global/widget', 'widget']
])('VuexStateshot', (description, namespace, initialValue) => {
  describe(description, () => {
    it('sets initial states', () => {
      const { vm } = createApp(namespace)
      expect(vm.hasUndo).toBeFalsy()
      expect(vm.hasRedo).toBeFalsy()
      expect(vm.undoCount).toBe(0)
      expect(vm.redoCount).toBe(0)
      expect(vm.historyLength).toBe(1)
    })

    it('change root module theme', async () => {
      const { vm } = createApp(namespace)
      expect(vm.theme).toBe('light')
      vm.setTheme('dark')
      expect(vm.theme).toBe('dark')
      await flushPromises()
      // console.group('【vuex-stateshot】')
      // console.log(vm.hasUndo)
      // console.log(vm.hasRedo)
      // console.log(vm.undoCount)
      // console.log(vm.redoCount)
      // console.log(vm.historyLength)
      // console.groupEnd()
      expect(vm.hasUndo).toBeTruthy()
      expect(vm.hasRedo).toBeFalsy()
      expect(vm.undoCount).toBe(1)
      expect(vm.redoCount).toBe(0)
      expect(vm.historyLength).toBe(2)
    })
  })
})

function createComponent (namespace) {
  // const helpers = createNamespacedHelpers(namespace)
  const stateshot = createNamespacedHelpers('vuexstateshot')

  return {
    template: '<div></div>',
    computed: {
      ...mapState(['theme']),
      ...stateshot.mapGetters(['hasUndo', 'hasRedo', 'undoCount', 'redoCount', 'historyLength'])
    },
    methods: {
      ...mapActions(['setTheme']),
      // ...mapMutations(['setTheme']),
      ...stateshot.mapActions(['snapshot', 'undo', 'redo', 'reset'])
    }
  }
}

function createStore (plugin) {
  return new Vuex.Store({
    state: { theme: 'light' },
    actions: {
      setTheme: ({ commit }, payload) => {
        commit('setTheme', payload)
      }
    },
    mutations: {
      setTheme: (state, payload) => { state.theme = payload }
    },
    modules: {
      // global(namespaced)
      // global(namespaced)/widget(namespaced)
      global: {
        namespaced: true,
        state: {},
        mutations: {},
        modules: {
          widget: {
            namespaced: true,
            state: {},
            mutations: {}
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

  const store = createStore(createPlugin(
    {
      rootModule: {
        actions: ['setTheme']
      }
    },
    {}
  ))

  const component = createComponent(namespace)

  return mount(component, {
    localVue,
    store
  })
}
