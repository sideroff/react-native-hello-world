import actionTypes from './../actionTypes'

const defaultState = {}

export default (state = defaultState, action) => {

  switch (action.type) {
    case actionTypes.TEST:
      state = Object.assign({}, state, { test: !state.test })
      return state
    default:
      return state
  }
}