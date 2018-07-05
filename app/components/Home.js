import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'
import t from 'tcomb-form-native'
import forms from './../forms'


const Form = t.form.Form

const options = {}

export default class Home extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.onButtonPress = this.onButtonPress.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit() {
    console.log('submit', this)
    console.log(this.refs)
  }

  onButtonPress() {
    console.log('heyy')
    this.props.navigation.navigate('Welcome')
  }

  render() {
    return (
      <View>
        <View>

        </View>
        <Form
          ref='login'
          type={forms.login.type}
          options={forms.login.options}></Form>
        <Button title='submit' onPress={this.onFormSubmit}></Button>
        <Button title='go to Welcome' onPress={this.onButtonPress}></Button>
      </View>
    )
  }
}


StyleSheet.create({

})