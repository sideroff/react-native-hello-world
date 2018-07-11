import React, { Component } from 'react'
import { Animated, Easing, StyleSheet, View, Text, Button, TouchableOpacity } from 'react-native'

export default class TodoContainer extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.todoContainer}>
        <TouchableOpacity onPress={this.props.onTodoPressed} style={styles.todoInfo}>
          <View>
            <Text style={styles.todoTitle}>{this.props.todo.title}</Text>
          </View>
          <View>
            <Text style={styles.todoDescription}>{this.props.todo.description}</Text>
          </View>
        </TouchableOpacity>
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
  todoInfo: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  todoTitle: {
    flex: 1,
    fontWeight: 'bold',
  },
  todoDescription: {
    flex: 1,
    fontStyle: 'italic'
  },
  todoMarkDoneButtonContainer: {
    flex: 1,
    paddingLeft: 10,
    paddingRight: 10
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
  },
})