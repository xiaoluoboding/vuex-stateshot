import { global } from '../mutation-types'
import { makeActions } from '../actions'

const state = {
  layout: [
    { x: 0, y: 0, w: 6, h: 4, i: 'One', color: '#4AF' },
    { x: 6, y: 0, w: 6, h: 3, i: 'Two', color: '#4FA' },
    { x: 0, y: 4, w: 6, h: 3, i: 'Three', color: '#A4F' },
    { x: 6, y: 3, w: 6, h: 4, i: 'Four', color: '#AF4' },
    { x: 0, y: 6, w: 12, h: 4, i: 'Five', color: '#F4A' }
  ],
  cloneLayout: []
}

const actions = {
  ...makeActions({
    setState: global.SET_STATE,
    setLayout: global.SET_LAYOUT,
    undoLayout: global.UNDO_LAYOUT,
    redoLayout: global.REDO_LAYOUT,
    resetLayout: global.RESET_LAYOUT
  })
}

const mutations = {
  [global.SET_STATE] (state, payload) {
    Object.assign(state, payload)
  },
  [global.SET_LAYOUT] (state, payload) {
    state.layout = payload
  },
  [global.UNDO_LAYOUT] (state, prevState) {
    if (prevState) {
      Object.assign(state, prevState)
    }
  },
  [global.REDO_LAYOUT] (state, nextState) {
    if (nextState) {
      Object.assign(state, nextState)
    }
  },
  [global.CHANGE_COLOR] (state, payload) {
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
  [global.RESET_LAYOUT] (state, payload) {
    state.layout = state.cloneLayout
  }
}

// nested modules
const modules = {
  widget: {
    namespaced: true,
    state: {
      isShowCard: false
    },
    actions: {
      ...makeActions({
        toggleShowCard: global.widget.TOGGLE_SHOW_CARD
      })
    },
    mutations: {
      [global.widget.TOGGLE_SHOW_CARD] (state, payload) {
        state.isShowCard = !state.isShowCard
      }
    }
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  modules
}
