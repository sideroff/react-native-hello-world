import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { TabNavigator } from 'react-navigation'

import Home from './components/Home'
import Profile from './components/Profile'
import Settings from './components/Settings'

import reducer from './reducers'

//remove a depricated method usage warning caused by react native
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.'
])

const tabNavigation = new TabNavigator({
  Home: { screen: Home },
  Profile: { screen: Profile },
  Settings: { screen: Settings },
})

function configureStore(initialState) {
  const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))

  return createStore(reducer, initialState, enhancer)
}

let store = configureStore({})

export default class App extends Component {
  componentWillMount() {
    // importing here because of:
    // https://github.com/cht8687/react-listview-sticky-header/issues/6#issuecomment-403214039
    const firebase = require('firebase')

    const firebaseConfig = {
      apiKey: "AIzaSyAHAJoCnJ0XGkzIbI6fLx_gZVLVI29efWY",
      authDomain: "errands-6eb05.firebaseapp.com",
      databaseURL: "https://errands-6eb05.firebaseio.com",
      projectId: "errands-6eb05",
      storageBucket: "errands-6eb05.appspot.com",
      messagingSenderId: "689110420767"
    }

    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }

    firebase.auth().onAuthStateChanged(user => {
      store.dispatch({ type: actionTypes.UPDATE_CURRENT_USER, payload: user })

      let path = 'Welcome'
      if (user) {
        path = 'Todos'
      }

      navigationService.navigate('Todos')
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Home />
          <Footer />
        </View>
      </Provider>
    )
  }
}