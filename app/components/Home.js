import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import t from 'tcomb-form-native'
import forms from './../forms'
import CustomList from './CustomList'
import { connect } from 'react-redux';


const Form = t.form.Form

const options = {}


function mapStateToProps(state) {
  return {
    todos: state.todos
  }
}

class Home extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.onButtonPress = this.onButtonPress.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)
  }

  onFormSubmit() {
    console.log('submit', this)
    console.log(this.refs)
  }

  onButtonPress() {
    this.props.navigation.navigate('Todo', )
  }

  onTodoMarkedDone(index) {
    console.log('here ++', index, this)
    this.props.dispatch({ type: actionTypes.REMOVE_TODO, payload: index })
  }

  render() {
    return (
      <View>
        <View>
          <CustomList data={this.props.todos} onTodoMarkedDone={this.onTodoMarkedDone} />
        </View>
        <Button title='Create Todo' onPress={this.onButtonPress}></Button>
      </View>
    )
  }
}


StyleSheet.create({

})

export default connect(mapStateToProps, dispatch => { return { dispatch } })(Home)
// <Form
// ref='login'
// type={forms.login.type}
// options={forms.login.options}></Form>
// <Button title='submit' onPress={this.onFormSubmit}></Button>