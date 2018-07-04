import React, { Component } from 'react'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'

import Home from './components/Home'


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
        <Home />
      </Provider>
    )
  }
}