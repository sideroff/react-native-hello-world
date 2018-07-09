import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from "react-redux"
import t from 'tcomb-form-native'
const Form = t.form.Form

import forms from './../forms'
import constants from './../constants'

import Button from './Button'
import actionTypes from './../actionTypes'

import * as firebase from 'firebase'

function mapStateToProps(state) {
  return {
    isLoggingIn: state.flags.isLoggingIn,
    isRegistering: state.flags.isRegistering,
    activeWelcomeForm: state.flags.activeWelcomeForm,
    loginFormMessage: state.messages.loginFormMessage,
    registerFormMessage: state.messages.registerFormMessage,
  }
}

class Welcome extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.onButtonPress = this.onButtonPress.bind(this)
  }

  componentWillMount() {
  }

  showForm(formID) {
    this.props.dispatch({
      type: actionTypes.UPDATE_ACTIVE_WELCOME_FORM,
      payload: formID
    })
  }

  onButtonPress() {
    console.log('onButtonPress')
    let values = this.refs[this.props.activeWelcomeForm].getValue()
    console.log('form', this.props.activeWelcomeForm)
    console.log('values', values)

    if (!values) return;

    const dispatch = this.props.dispatch

    if (this.props.activeWelcomeForm === constants.registerForm) {
      register(values)
    } else {
      login(values)
    }


    function register({ email, password, acceptedTerms }) {
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

    function login({ email, password }) {
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
  }

  getCorrectForm() {
    if (this.props.activeWelcomeForm === constants.registerForm) {
      return (
        <Form
          ref='registerForm'
          type={forms.register.type}
          options={forms.register.options}
        ></Form>
      )
    }

    return (
      <Form
        ref='loginForm'
        type={forms.login.type}
        options={forms.login.options}
      ></Form>
    )
  }

  getCorrectButton() {
    if (this.props.activeWelcomeForm === constants.registerForm) {
      return (
        <Button title="Already registered? Login!" onPress={() => { this.showForm(constants.loginForm) }} style={styles.button} />
      )
    }
    return (
      <Button title="Not registered? Register!" onPress={() => { this.showForm(constants.registerForm) }} style={styles.button} />
    )
  }


  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingTwo}>Welcome to</Text>
          <Text style={styles.headingOne}>Errands</Text>
        </View>
        <View style={styles.authForm}>
          {this.getCorrectForm()}
        </View>
        <View>
          <Text>{this.props.registerFormMessage || this.props.loginFormMessage || ''}</Text>
        </View>
        <View style={styles.buttonBar}>
          {this.getCorrectButton()}
          <Button title="Let's go!" onPress={this.onButtonPress} isPerformingActivity={this.props.isLoggingIn || this.props.isRegistering} style={styles.button} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around'
  },
  authForm: {
    width: 300
  },
  heading: {
    alignItems: 'center'
  },
  headingOne: {
    fontSize: 50
  },
  headingTwo: {
    fontSize: 20
  },
  buttonBar: {
    flexDirection: 'row'
  },
  button: {
    margin: 20
  }
})

export default connect(mapStateToProps, dispatch => { return { dispatch } })(Welcome)