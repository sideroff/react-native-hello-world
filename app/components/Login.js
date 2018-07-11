import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text
} from 'react-native'
import t from 'tcomb-form-native'
import firebase from 'firebase'

import Button from './Button'

import forms from './../forms'
import actionTypes from './../actionTypes'

const Form = t.form.Form

function mapStateToProps(state) {
  return {
    isLoggingIn: state.flags.isLoggingIn,
    loginFormMessage: state.messages.loginFormMessage,
  }
}

class Login extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.login = this.login.bind(this)
  }

  login({ email, password }) {
    this.props.dispatch({ type: actionTypes.UPDATE_LOGGING_IN_FLAG, payload: true })
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      this.props.dispatch({ type: actionTypes.UPDATE_LOGGING_IN_FLAG, payload: false })
    }).catch(error => {
      this.props.dispatch({ type: actionTypes.UPDATE_LOGGING_IN_FLAG, payload: false })
      this.props.dispatch({ type: actionTypes.UPDATE_LOGGING_IN_MESSAGE, payload: error.message })
    })
  }

  onSubmit() {
    let values = this.refs['loginForm'].getValue()
    if (values) {
      console.log(values)
      this.login(values)
    }
  }

  render() {
    return (
      <View>
        <Form
          ref='loginForm'
          type={forms.login.type}
          options={forms.login.options}
        ></Form>
        <Button title='Login' onPress={this.onSubmit} isPerformingActivity={this.props.isLoggingIn} />
        <Text>{this.props.loginFormMessage}</Text>
      </View>
    )
  }
}

export default connect(mapStateToProps, dispatch => { return { dispatch } })(Login)