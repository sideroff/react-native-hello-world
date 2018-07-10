import { createBottomTabNavigator } from 'react-navigation'

import Home from './Home'
import Profile from './Profile'
import Settings from './Settings'

export default createBottomTabNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Settings: { screen: Settings }
})