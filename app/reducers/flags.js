import actionTypes from './../actionTypes'
import constants from './../constants'

const defaultState = {
  currentlyEditedTodoIndex: null,
  activeWelcomeForm: constants.loginForm
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPTATE_CURRENTLY_EDITED_TODO_INDEX:
      return Object.assign({}, state, { currentlyEditedTodoIndex: state.currentlyEditedTodoIndex })
    case actionTypes.UPDATE_LOGGING_IN_FLAG:
      return Object.assign({}, state, { isLoggingIn: action.payload })
    case actionTypes.UPDATE_REGISTERING_FLAG:
      return Object.assign({}, state, { isRegistering: action.payload })
    case actionTypes.UPDATE_ACTIVE_WELCOME_FORM:
      return Object.assign({}, state, { activeWelcomeForm: action.payload })
    default:
      return state
  }
}