import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'
import * as firebase from 'firebase'

import Button from './Button'

import forms from './../forms'
import actionTypes from './../actionTypes'

const Form = t.form.Form

function mapStateToProps(state) {
  return {
    isRegistering: state.flags.isRegistering,
    registerFormMessage: state.messages.registerFormMessage,
  }
}

class Register extends Component {
  constructor(props) {
    super(props)

    this.onSubmit = this.onSubmit.bind(this)
    this.register = this.register.bind(this)
  }

  register({ email, password, acceptedTerms }) {
    this.props.dispatch({ type: actionTypes.UPDATE_REGISTERING_FLAG, payload: true })
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
      this.props.dispatch({ type: actionTypes.UPDATE_REGISTERING_FLAG, payload: false })
    }).catch(error => {
      this.props.dispatch({ type: actionTypes.UPDATE_REGISTERING_FLAG, payload: false })
      this.props.dispatch({ type: actionTypes.UPDATE_REGISTERING_MESSAGE, payload: error.message })

    })
  }

  onSubmit() {
    let values = this.refs['registerForm'].getValue()
    console.log('here')
    if (values) {
      this.register(values)
    }
  }

  render() {
    return (
      <View>
        <Form
          ref='registerForm'
          type={forms.register.type}
          options={forms.register.options}
        ></Form>
        <Text>{this.props.registerFormMessage}</Text>
        <Button title='Register' onPress={this.onSubmit} isPerformingActivity={this.props.isRegistering} />
      </View>
    )
  }
}


export default connect(mapStateToProps, dispatch => { return { dispatch } })(Register)