import Vue from 'vue'
import Vuex from 'vuex'

import { createPlugin } from '../../src/vuex-stateshot'
import * as actions from './actions'
import modules from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {},
  actions,
  modules,
  plugins: [
    createPlugin(
      {
        global: {
          // The actions you want snapshot
          actions: ['syncState', 'setLayout'],
          // The mutations you want snapshot
          mutations: ['CHANGE_COLOR']
        },
        'model': {
          actions: ['toggleShow']
        }
      },
      {
        maxLength: 20
      }
    )
  ]
})
