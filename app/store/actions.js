const makeAction = type => {
  return ({ commit }, ...args) => commit(type, ...args)
}

export const syncState = makeAction('SYNC_STATE')
export const setLayout = makeAction('SET_LAYOUT')
export const undoLayout = makeAction('UNDO_LAYOUT')
export const redoLayout = makeAction('REDO_LAYOUT')
