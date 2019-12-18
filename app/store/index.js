import Vue from 'vue'
import Vuex from 'vuex'

import { createPlugin } from '../../src/vuex-stateshot'
import * as actions from './actions'
import modules from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light'
  },
  actions,
  modules,
  plugins: [
    createPlugin(
      {
        // The namespace of modules
        global: {
          // The actions you want snapshot
          actions: ['syncState', 'setLayout'],
          // The mutations you want snapshot
          mutations: ['CHANGE_COLOR']
        },
        'global/widget': {
          actions: ['toggleShowCard']
        }
      },
      {
        maxLength: 20
      }
    )
  ]
})
