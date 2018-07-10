import React, { Component } from 'react'
import { View } from 'react-native'
import { connect } from 'react-redux'
import t from 'tcomb-form-native'

import Button from './Button'

import forms from './../forms'

const Form = t.form.Form

function mapStateToProps(state) {
  return {}
}

class Register extends Component {
  constructor(props) {
    super(props)
  }

  register({ email, password, acceptedTerms }) {
    dispatch({ type: actionTypes.UPDATE_REGISTERING_FLAG, payload: true })
    firebase.auth().createUserWithEmailAndPassword(email, password).then(response => {
      console.log('reg response', response)
      dispatch({ type: actionTypes.UPDATE_REGISTERING_FLAG, payload: false })
    }).catch(error => {
      console.log('reg error', error)
      dispatch({ type: actionTypes.UPDATE_REGISTERING_FLAG, payload: false })
      dispatch({ type: actionTypes.UPDATE_REGISTERING_MESSAGE, payload: error.message })

    })
  }

  onSubmit() {
    let values = this.refs.registerForm.getValue()
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
        <Button></Button>
      </View>
    )
  }
}


export default connect(mapStateToProps, dispatch => { return { dispatch } })(Register)