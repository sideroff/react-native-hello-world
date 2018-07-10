import React, { Component } from 'react'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'

import forms from './../forms'

const Form = t.form.Form

function mapStateToProps(state) {
  return {}
}

class Login extends Component {
  constructor(props) {
    super(props)
  }

  login({ email, password }) {
    dispatch({ type: actionTypes.UPDATE_LOGGING_IN_FLAG, payload: true })
    firebase.auth().signInWithEmailAndPassword(email, password).then(response => {
      console.log('login response', response)
      dispatch({ type: actionTypes.UPDATE_LOGGING_IN_FLAG, payload: false })
    }).catch(error => {
      console.log('login error', error)
      dispatch({ type: actionTypes.UPDATE_LOGGING_IN_FLAG, payload: false })
      dispatch({ type: actionTypes.UPDATE_LOGGING_IN_MESSAGE, payload: error.message })
    })
  }

  onSubmit() {
    let values = this.refs.registerForm.getValue()
    if (values) {
      this.login(values)
    }
  }

  render() {
    return (<Form
      ref='loginForm'
      type={forms.login.type}
      options={forms.login.options}
    ></Form>)
  }
}

export default connect(mapStateToProps, dispatch => { return { dispatch } })(Login)