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


  componentDidMount() {
    if (this.props.todos
      && typeof this.props.todos === 'object'
      && this.props.todos.length > 0) return

    let ref = firebase.database().ref('/todos/').orderByChild('uid').equalTo(this.props.currentUser.uid)
    ref.on("child_added", snapshot => {
      let todo = Object.assign({}, snapshot.val(), { key: snapshot.key })
      this.props.dispatch({ type: actionTypes.ADD_TODO, payload: { key: snapshot.key, data: todo } })
    })

    ref.on("child_changed", snapshot => {
      let todo = Object.assign({}, snapshot.val(), { key: snapshot.key })
      this.props.dispatch({ type: actionTypes.ADD_TODO, payload: { key: snapshot.key, data: todo } })
    })

    ref.on("child_removed", snapshot => {
      this.props.dispatch({ type: actionTypes.REMOVE_TODO, payload: { key: snapshot.key } })
    })
  }

  onCreateTodoPress() {
    this.props.navigation.navigate('TodoCreate', { onTodoSave: this.onTodoSave })
  }

  onTodoPressed(key) {
    console.log('onTodoPressed ', key, this)
    this.props.navigation.navigate('TodoView', {
      todo: this.props.todos[key],
      key,
      onTodoEditPressed: this.onTodoEditPressed
    })
  }

  onTodoEditPressed(key, data) {
    this.props.navigation.navigate('TodoEdit', {
      todo: this.props.todos[key],
      key,
      onTodoSave: this.onTodoSave
    })
  }

  onTodoSave(key, values) {
    if (key) {
      let editedTodo = Object.assign(this.props.todos[key], values)
      firebase.database().ref(`/todos/${key}`).set(editedTodo).then(response => {
        console.log('todo was edited')
        this.props.navigation.navigate('Todos')
      }).catch(error => {
        console.log('edit failed', error)
      })

    } else {
      let newTodo = Object.assign({}, values, { uid: this.props.currentUser.uid })
      console.log('adding', newTodo)

      firebase.database().ref('/todos/').push(newTodo).then(response => {
        this.props.navigation.navigate('Todos')
      }).catch(error => {
        console.log('add failed', error)
      })
    }
  }


  onTodoMarkedDone(index) {
    firebase.database().ref(`/todos/${this.props.todos[index].key}`).remove().then(response => {
      console.log('todo was removed')
    }).catch(error => {
      console.log('todo could not be removed wat do')
    })

  }

  render() {
    return (
      <View>
        <View>
          <CustomList
            data={Object.values(this.props.todos)}
            keyExtractor={(item, index) => item.key}
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