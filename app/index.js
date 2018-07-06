import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
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

const Router = createStackNavigator({
  Welcome: { screen: Welcome },
  Home: { screen: Home },
  TodoView: { screen: TodoView },
  TodoEdit: { screen: TodoEdit },
})

function configureStore(initialState) {
  const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })
  const enhancer = compose(applyMiddleware(thunkMiddleware, loggerMiddleware))

  return createStore(reducer, initialState, enhancer)
}

let store = configureStore({})

export default class App extends Component {
  render() {
    return (
      <Provider store={store} >
        <Router />
      </Provider>
    )
  }
}