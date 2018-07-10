import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import t from 'tcomb-form-native'
import forms from './../forms'
import CustomList from './CustomList'
import { connect } from 'react-redux'
import actionTypes from './../actionTypes'


const Form = t.form.Form

const options = {}


function mapStateToProps(state) {
  return {
    todos: state.todos
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
    this.onFormSubmit = this.onFormSubmit.bind(this)
    this.onTodoMarkedDone = this.onTodoMarkedDone.bind(this)
    this.onTodoPressed = this.onTodoPressed.bind(this)
    this.onTodoEditPressed = this.onTodoEditPressed.bind(this)
    this.onTodoSave = this.onTodoSave.bind(this)
  }

  onFormSubmit() {
    console.log('submit', this)
    console.log(this.refs)
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
    console.log('onTodoSave', index, values, this)
    let type = index ? actionTypes.UPDATE_TODO : actionTypes.ADD_TODO
    this.props.dispatch({ type, payload: { index: index, data: values } })
    this.props.navigation.navigate('Todos')
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