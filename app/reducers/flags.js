import actionTypes from './../actionTypes'

const defaultState = {
  currentlyEditedTodoIndex: null
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPTATE_CURRENTLY_EDITED_TODO_INDEX:
      return Object.assign({}, state, { currentlyEditedTodoIndex: state.currentlyEditedTodoIndex })
    case actionTypes.UPDATE_LOGGING_IN_FLAG:
      return Object.assign({}, state, { isLoggingIn: action.payload })
    default:
      return state
  }
}