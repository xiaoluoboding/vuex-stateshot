import Vue from 'vue'
import Vuex from 'vuex'

import { createPlugin } from '../../src/vuex-stateshot'
import * as actions from './actions'
import * as types from './mutation-types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    layout: [
      { x: 0, y: 0, w: 6, h: 4, i: 'One', color: '#4af' },
      { x: 6, y: 0, w: 6, h: 2, i: 'Two', color: '#4fa' },
      { x: 0, y: 4, w: 6, h: 2, i: 'Three', color: '#a4f' },
      { x: 6, y: 2, w: 6, h: 4, i: 'Four', color: '#af4' },
      { x: 0, y: 6, w: 12, h: 2, i: 'Five', color: '#f4a' }
    ]
  },
  mutations: {
    [types.SYNC_STATE] (state, payload) {
      Object.assign(state, payload)
    },
    [types.SET_LAYOUT] (state, payload) {
      state.layout = payload
    },
    [types.UNDO_LAYOUT] (state, prevState) {
      if (prevState) {
        const { layout } = prevState
        state.layout = layout
      }
    },
    [types.REDO_LAYOUT] (state, nextState) {
      if (nextState) {
        const { layout } = nextState
        state.layout = layout
      }
    }
  },
  actions,
  modules: {},
  plugins: [
    createPlugin({
      actions: [
        'syncState',
        'setLayout'
      ]
    })
  ]
})
