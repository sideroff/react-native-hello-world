import React, { Component } from 'react'
import { StyleSheet, View, Text } from 'react-native'

export default class TodoView extends Component {
  constructor(props) {
    super(props)

    this.data = this.props.navigation.getParam('todo', null)
  }

  render() {
    return (
      <View>
        <Text>{this.data.title}</Text>
        <Text>{this.data.description}</Text>
      </View>
    )
  }
}