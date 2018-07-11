import actionTypes from './../actionTypes'
import constants from './../constants'

const defaultState = {
  activeWelcomeForm: constants.loginForm,
  isRegistering: false,
  isLoggingIn: false,
}

export default (state = defaultState, action) => {
  switch (action.type) {
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