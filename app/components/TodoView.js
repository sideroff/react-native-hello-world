import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class TodoView extends Component {
  constructor(props) {
    super(props)

    this.data = this.props.navigation.getParam('todo', null)
    this.key = this.props.navigation.getParam('key')
    this.onTodoEditPressed = this.props.navigation.getParam('onTodoEditPressed')

    console.log('todo view', this.data)
  }

  render() {
    return (
      <View>
        <Text>{this.data.title}</Text>
        <Text>{this.data.description}</Text>
        <Button title='Edit' onPress={() => this.onTodoEditPressed(this.key)} />
      </View>
    )
  }
}