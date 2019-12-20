import { createLocalVue, shallowMount } from '@vue/test-utils'
import Vuex, { createNamespacedHelpers, mapMutations } from 'vuex'

import { createPlugin } from '../../src/vuex-stateshot'

describe.each([
  ['namespaced module', 'one', 'one'],
  ['namespaced module under namespaced module', 'one/one_a', 'one_a'],
  ['namespaced module under non-namespaced module', 'two_b', 'two_b']
])('VuexStateshot', (description, namespace, initialValue) => {
  describe(description, () => {
    it('sets initial states', () => {
      const { vm } = createApp(namespace)
      expect(vm.hasUndo).toBe(false)
      expect(vm.hasRedo).toBe(false)
      expect(vm.undoCount).toBe(0)
      expect(vm.redoCount).toBe(0)
      expect(vm.historyLength).toBe(0)
    })
  })
})

function createComponent (namespace) {
  const helpers = createNamespacedHelpers(namespace)
  const stateshot = createNamespacedHelpers('vuexstateshot')

  return {
    template: '<div></div>',
    computed: {
      ...helpers.mapState(['value', 'excluded']),
      ...stateshot.mapGetters(['hasUndo', 'hasRedo', 'undoCount', 'redoCount', 'historyLength'])
    },
    methods: {
      ...mapMutations(['setTheme']),
      ...helpers.mapMutations(['setValue', 'clearValue', 'setExcluded']),
      ...stateshot.mapActions(['undo', 'redo', 'reset'])
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
      // one(namespaced)
      // one(namespaced)/one_a(namespaced)
      one: {
        namespaced: true,
        state: {
          value: 'one',
          exclude: 'ignore one'
        },
        mutations: {
          setValue: (state, payload) => { state.value = payload },
          clearValue: (state) => { state.value = '' },
          setExcluded: (state, payload) => { state.excluded = payload }
        },
        modules: {
          one_a: {
            namespaced: true,
            state: { value: 'one_a', exclude: 'ignore one_a' },
            mutations: {
              setValue: (state, payload) => { state.value = payload },
              clearValue: (state) => { state.value = '' },
              setExcluded: (state, payload) => { state.excluded = payload }
            }
          }
        }
      },
      // two(non-namespaced)
      // two(non-namespaced)/two_a(non-namespaced)
      // two(non-namespaced)/two_b(namespaced)
      two: {
        state: { value: 'two', exclude: 'ignore two' },
        mutations: {
          setValue: (state, payload) => { state.value = payload },
          clearValue: (state) => { state.value = '' },
          setExcluded: (state, payload) => { state.excluded = payload }
        },
        modules: {
          two_a: {
            state: { value: 'two_a', exclude: 'ignore two_a' },
            mutations: {
              setValue: (state, payload) => { state.value = payload },
              clearValue: (state) => { state.value = '' },
              setExcluded: (state, payload) => { state.excluded = payload }
            }
          },
          two_b: {
            namespaced: true,
            state: { value: 'two_b', exclude: 'ignore two_b' },
            mutations: {
              setValue: (state, payload) => { state.value = payload },
              clearValue: (state) => { state.value = '' },
              setExcluded: (state, payload) => { state.excluded = payload }
            }
          }
        }
      }
    },
    plugins: [plugin]
  })
}

function createApp (namespace = null, pluginOptions = {}) {
  const localVue = createLocalVue()
  localVue.use(Vuex)

  const store = createStore(createPlugin(
    {
      'one': pluginOptions,
      'one/one_a': pluginOptions,
      'two_b': pluginOptions
    },
    {}
  ))

  const component = createComponent(namespace)

  return shallowMount(component, {
    localVue,
    store
  })
}
