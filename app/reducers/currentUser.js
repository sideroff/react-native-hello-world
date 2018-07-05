import actionTypes from './../actionTypes'

export default (state = {}, action) => {

  switch (action.type) {
    case actionTypes.UPDATE_EMAIL:
      state = Object.assign({}, state, { email: action.payload })
      return state
    default:
      return state
  }
}