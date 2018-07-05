import { combineReducers } from 'redux'

import currentUser from './currentUser'
import todos from './todos'

export default combineReducers({
  currentUser,
  todos
})