import { combineReducers } from 'redux'

import currentUser from './currentUser'
import todos from './todos'
import flags from './flags'

export default combineReducers({
  currentUser,
  todos,
  flags,
})