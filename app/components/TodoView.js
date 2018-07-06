import React, { Component } from 'react'
import { StyleSheet, View, Text, Button } from 'react-native'

export default class TodoView extends Component {
  constructor(props) {
    super(props)

    this.data = this.props.navigation.getParam('todo', null)
    this.index = this.props.navigation.getParam('index')
    this.onTodoEditPressed = this.props.navigation.getParam('onTodoEditPressed')
  }

  render() {
    return (
      <View>
        <Text>{this.data.title}</Text>
        <Text>{this.data.description}</Text>
        <Button title='Edit' onPress={() => this.onTodoEditPressed(this.index, 'heyy')} />
      </View>
    )
  }
}