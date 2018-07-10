import actionTypes from './../actionTypes'

export default (state = {}, action) => {
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_USER:
      if (!action.payload) {
        return {}
      }
      return action.payload
    default:
      return state
  }
}