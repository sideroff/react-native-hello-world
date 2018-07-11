import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'
import store from './store'

import netInfo from './netInfo'

import LoadingAuthOrApp from './components/LoadingAuthOrApp'

import actionTypes from './actionTypes'

// remove a depricated method usage warning caused by react native
// https://github.com/firebase/firebase-js-sdk/issues/97
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings([
  'Warning: isMounted(...) is deprecated in plain JavaScript React classes.',
  'Setting a timer'
])

export default class App extends Component {
  componentWillMount() {
    netInfo.init(store.dispatch)
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
      firebase.initializeApp(firebaseConfig)
    }

    firebase.auth().onAuthStateChanged(user => {
      store.dispatch({ type: actionTypes.UPDATE_CURRENT_USER, payload: user })
    })
  }

  render() {
    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <LoadingAuthOrApp />
        </View>
      </Provider>
    )
  }
}