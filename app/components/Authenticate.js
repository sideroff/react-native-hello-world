import { createBottomTabNavigator } from 'react-navigation'

import Login from './Login'
import Register from './Register'

export default createBottomTabNavigator({
  Register: { screen: Register },
  Login: { screen: Login },
})