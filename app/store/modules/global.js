import * as types from '../mutation-types'
import { makeActions } from '../actions'

const state = {
  layout: [
    { x: 0, y: 0, w: 6, h: 4, i: 'One', color: '#4AF' },
    { x: 6, y: 0, w: 6, h: 2, i: 'Two', color: '#4FA' },
    { x: 0, y: 4, w: 6, h: 2, i: 'Three', color: '#A4F' },
    { x: 6, y: 2, w: 6, h: 4, i: 'Four', color: '#AF4' },
    { x: 0, y: 6, w: 12, h: 2, i: 'Five', color: '#F4A' }
  ],
  cloneLayout: []
}

const actions = {
  ...makeActions({
    setState: 'SET_STATE',
    setLayout: 'SET_LAYOUT',
    undoLayout: 'UNDO_LAYOUT',
    redoLayout: 'REDO_LAYOUT',
    resetLayout: 'RESET_LAYOUT'
  })
}

const mutations = {
  [types.SET_STATE] (state, payload) {
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
  },
  [types.CHANGE_COLOR] (state, payload) {
    const shuffle = ([...arr]) => {
      let m = arr.length
      while (m) {
        let temp = null
        const i = Math.floor(Math.random() * m--)
        temp = arr[m]
        arr[m] = arr[i]
        arr[i] = temp
      }
      return arr
    }
    state.layout = state.layout.map(item => {
      const color = shuffle(['F', 'A', '4']).join('')
      return {
        ...item,
        color: `#${color}`
      }
    })
  },
  [types.RESET_LAYOUT] (state, payload) {
    state.layout = state.cloneLayout
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
