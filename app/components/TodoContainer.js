import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native'

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
    this.onTodoMarkedDone = this.onTodoMarkedDone.bind(this)
  }

  onTodoMarkedDone() {
    console.log('todo marked done')
  }

  render() {
    return (
      <View style={styles.todoContainer}>
        <View>
          <Text style={styles.todoTitle}>{this.props.todo.title}</Text>
        </View>
        <View>
          <Text style={styles.todoDescription}>{this.props.todo.description}</Text>
        </View>
        <View style={styles.todoMarkDoneButtonContainer}>
          <Button title='Check' onPress={this.onTodoMarkedDone} color='green' style={styles.button} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    borderRadius: 4,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  todoTitle: {
    fontWeight: 'bold'
  },
  todoDescription: {
    fontStyle: 'italic'
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10
  },
})