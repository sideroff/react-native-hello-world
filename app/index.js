import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import { View, Text } from 'react-native'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { createStackNavigator } from 'react-navigation'


//remove a depricated method usage warning caused by react native
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.'
])

import Home from './components/Home'
import Welcome from './components/Welcome'
import TodoView from './components/TodoView'
import TodoEdit from './components/TodoEdit'
import Footer from './components/Footer'

import actionTypes from './actionTypes'
import navigationService from './navigationService'

const Router = createStackNavigator({
  Home: { screen: Home },
  Welcome: { screen: Welcome },
  TodoView: { screen: TodoView },
  TodoEdit: { screen: TodoEdit },
  TodoCreate: { screen: TodoEdit },
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
        path = 'Home'
      }

      navigationService.navigate('Home')
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Router ref={navigationRef => navigationService.init(navigationRef)} />
          <Footer />
        </View>

      </Provider>
    )
  }
}