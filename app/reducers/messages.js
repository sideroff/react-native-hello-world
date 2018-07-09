import actionTypes from './../actionTypes'
import constants from './../constants'

const defaultState = {
  registerFormMessage: null,
  loginFormMessage: null,
}

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_LOGGING_IN_FLAG:
    case actionTypes.UPDATE_REGISTERING_FLAG:
    case actionTypes.UPDATE_ACTIVE_WELCOME_FORM:
      return Object.assign({}, state, { registerFormMessage: null, loginFormMessage: null })
    case actionTypes.UPDATE_LOGGING_IN_MESSAGE:
      return Object.assign({}, state, { loginFormMessage: action.payload })
    case actionTypes.UPDATE_REGISTERING_MESSAGE:
      return Object.assign({}, state, { registerFormMessage: action.payload })
    default:
      return state
  }
}