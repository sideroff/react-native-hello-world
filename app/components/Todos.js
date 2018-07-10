import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import t from 'tcomb-form-native'
import { connect } from 'react-redux'
import * as firebase from 'firebase'

import CustomList from './CustomList'

import actionTypes from './../actionTypes'
import forms from './../forms'

const Form = t.form.Form

const options = {}


function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    todos: state.todos,
  }
}

class Todos extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.todoEdit = false

    this.onCreateTodoPress = this.onCreateTodoPress.bind(this)
    this.onTodoMarkedDone = this.onTodoMarkedDone.bind(this)
    this.onTodoPressed = this.onTodoPressed.bind(this)
    this.onTodoEditPressed = this.onTodoEditPressed.bind(this)
    this.onTodoSave = this.onTodoSave.bind(this)
  }

  onCreateTodoPress() {
    this.props.navigation.navigate('TodoCreate', { onTodoSave: this.onTodoSave })
  }

  onTodoPressed(index) {
    console.log('onTodoPressed ', index, this)
    this.props.navigation.navigate('TodoView', {
      todo: this.props.todos[index],
      index,
      onTodoEditPressed: this.onTodoEditPressed
    })
  }

  onTodoEditPressed(index, data) {
    this.props.dispatch({ type: actionTypes.UPTATE_CURRENTLY_EDITED_TODO_INDEX, payload: index })
    this.props.navigation.navigate('TodoEdit', {
      todo: this.props.todos[index],
      index,
      onTodoSave: this.onTodoSave
    })
  }

  onTodoSave(index, values) {
    let type = index ? actionTypes.UPDATE_TODO : actionTypes.ADD_TODO
    console.log(this.props.currentUser.uid)

    // //TODO : create todo in firebase
    // firebase.database().ref('/todos/')
    // this.props.dispatch({ type, payload: { index: index, data: values } })
    // this.props.navigation.navigate('Todos')
  }


  onTodoMarkedDone(index) {
    console.log('onTodoMarkedDone', index, this)
    this.props.dispatch({ type: actionTypes.REMOVE_TODO, payload: index })
  }

  render() {
    return (
      <View>
        <View>
          <CustomList
            data={this.props.todos}
            onTodoEditPressed={this.onTodoEditPressed}
            onTodoPressed={this.onTodoPressed}
            onTodoMarkedDone={this.onTodoMarkedDone} />
        </View>
        <Button title='Create Todo' onPress={this.onCreateTodoPress}></Button>
      </View>
    )
  }
}

export default connect(mapStateToProps, dispatch => { return { dispatch } })(Todos)