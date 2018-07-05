import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import { connect } from "react-redux"
import t from 'tcomb-form-native'
const Form = t.form.Form

import forms from './../forms'

import actionTypes from './../actionTypes'

function mapStateToProps(state) {
  return { test: state.currentUser.test, stateProp: 321 }
}

class Welcome extends React.Component {
  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    let values = this.refs.authForm.getValue()
    if (values) {
      this.props.dispatch({ type: actionTypes.UPDATE_EMAIL, payload: values.email })

      this.props.navigation.navigate('Home')
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingTwo}>Welcome to</Text>
          <Text style={styles.headingOne}>Errands</Text>
        </View>
        <View style={styles.authForm}>
          <Form
            ref='authForm'
            type={forms.auth.type}
            options={forms.auth.options}
          ></Form>
        </View>
        <Button title="Let's go!" onPress={this.onButtonPress} />
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
  }
})

export default connect(mapStateToProps, dispatch => { return { dispatch } })(Welcome)