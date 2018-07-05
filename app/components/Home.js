import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import t from 'tcomb-form-native'
import forms from './../forms'
import CustomList from './CustomList'


const Form = t.form.Form

const options = {}

export default class Home extends React.Component {

  static navigationOptions = {
    header: null
  }

  constructor(props) {
    super(props)

    this.onButtonPress = this.onButtonPress.bind(this)
    this.onFormSubmit = this.onFormSubmit.bind(this)

    this.data = [
      { title: '1 title', description: '2 description' },
      { title: '2 title', description: '3 description' },
      { title: '3 title', description: '4 description' },
      { title: '4 title', description: '5 description' },
    ]

    // this.data = {
    //   id1: { title: '1 title', description: '2 description' },
    //   id2: { title: '2 title', description: '3 description' },
    //   id3: { title: '3 title', description: '4 description' },
    //   id4: { title: '4 title', description: '5 description' },
    // }
  }

  onFormSubmit() {
    console.log('submit', this)
    console.log(this.refs)
  }

  onButtonPress() {
    this.props.navigation.navigate('Todo', )
  }

  render() {
    return (
      <View>
        <View>
          <CustomList data={this.data} />
        </View>
        <Button title='Create Todo' onPress={this.onButtonPress}></Button>
      </View>
    )
  }
}


StyleSheet.create({

})


// <Form
// ref='login'
// type={forms.login.type}
// options={forms.login.options}></Form>
// <Button title='submit' onPress={this.onFormSubmit}></Button>