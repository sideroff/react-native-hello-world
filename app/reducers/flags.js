import actionTypes from './../actionTypes'
const defaultState = {
  currentlyEditedTodoIndex: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPTATE_CURRENTLY_EDITED_TODO_INDEX:
      return Object.assign({}, state, { currentlyEditedTodoIndex: state.currentlyEditedTodoIndex })
    default:
      return state
  }
}