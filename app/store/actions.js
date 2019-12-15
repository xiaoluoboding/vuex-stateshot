const makeAction = type => {
  return ({ commit }, ...args) => commit(type, ...args)
}

export const setState = makeAction('SET_STATE')
export const setLayout = makeAction('SET_LAYOUT')
export const undoLayout = makeAction('UNDO_LAYOUT')
export const redoLayout = makeAction('REDO_LAYOUT')
export const resetLayout = makeAction('RESET_LAYOUT')
