import actionTypes from './../actionTypes'
const defaultState = {}

export default (state = defaultState, action) => {
  let diff = {}
  switch (action.type) {
    case actionTypes.UPDATE_CURRENT_USER:
      return defaultState
    case actionTypes.ADD_TODO:
      diff[action.payload.key] = action.payload.data
      return Object.assign({}, state, diff)
    case actionTypes.REMOVE_TODO:
      diff = Object.assign({}, state)
      delete diff[action.payload.key]
      return diff
    case actionTypes.UPDATE_TODO:
      diff[action.payload.key] = action.payload.data
      return Object.assign({}, state, diff)
    default:
      return state
  }
}