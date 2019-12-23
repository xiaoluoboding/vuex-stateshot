import Vue from 'vue'
import Vuex from 'vuex'

import { createPlugin } from '../../src/vuex-stateshot'
import * as actions from './actions'
import * as types from './mutation-types'
import modules from './modules/index'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theme: 'light'
  },
  actions,
  mutations: {
    [types.SET_STATE] (state, payload) {
      Object.assign(state, payload)
    },
    [types.SET_THEME] (state, payload) {
      state.theme = payload
    }
  },
  modules,
  plugins: [
    createPlugin(
      {
        rootModule: {
          mutations: ['SET_THEME']
        },
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
