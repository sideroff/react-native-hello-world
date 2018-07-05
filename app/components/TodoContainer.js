import React, { Component } from 'react'
import { StyleSheet, View, Text, Button, TouchableHighlight } from 'react-native'

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
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
          <Button title='Check' onPress={this.props.onTodoMarkedDone} color='green' style={styles.button} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',


    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#d6d7da',
    padding: 10,
    margin: 10
  },
  todoTitle: {
    fontWeight: 'bold',
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