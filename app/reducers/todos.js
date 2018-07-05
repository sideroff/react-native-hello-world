import actionTypes from './../actionTypes'
const defaultState =  [
  { title: '1 title', description: '2 description' },
  { title: '2 title', description: '3 description' },
  { title: '3 title', description: '4 description' },
  { title: '4 title', description: '5 description' },
  { title: '3 title', description: '4 description' },
  { title: '4 title', description: '5 description' },
  { title: '3 title', description: '4 description' },
]

export default (state = defaultState, action) => {
  switch (action.type) {
    case actionTypes.ADD_TODO:
      return [...state, payload]
    case actionTypes.REMOVE_TODO:
      return [...state.slice(0, action.payload), ...state.slice(action.payload + 1)]
    default:
      return state
  }
}