import React, { Component } from 'react'
import {
  View,
  Button
} from 'react-native'
import t from 'tcomb-form-native'


import forms from './../forms'

const Form = t.form.Form

export default class TodoEdit extends Component {
  constructor(props) {
    super(props)

    this.data = this.props.navigation.getParam('todo', null)
    this.key = this.props.navigation.getParam('key')
    this.onTodoSave = this.props.navigation.getParam('onTodoSave')
    this.onPress = this.onPress.bind(this)

    console.log('todo edit', this.key)
  }

  onPress() {
    var values = this.refs.todoForm.getValue()
    if (values) {
      this.onTodoSave(this.key, values)
    }
  }

  render() {
    return (
      <View>
        <Form
          ref='todoForm'
          type={forms.todoCreate.type}
          options={forms.todoCreate.options}
          value={this.data}
        ></Form>
        <Button title='Save' onPress={this.onPress} />
      </View >
    )
  }
}