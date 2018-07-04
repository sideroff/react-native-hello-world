import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import { createStackNavigator } from 'react-navigation'

import Home from './components/Home'
import Welcome from './components/Welcome'

const Router = createStackNavigator({
  Welcome: { screen: Welcome },
  Home: { screen: Home }
})

const loggerMiddleware = createLogger({ predicate: (getState, action) => __DEV__ })

function configureStore(initialState) {
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