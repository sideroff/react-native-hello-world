import React from 'react'
import { StyleSheet, View, Text, Button, FlatList } from 'react-native'
import TodoContainer from './TodoContainer'


export default class CustomList extends React.Component {
  constructor(props) {
    super(props)

    console.log('custom list ', this.props)
  }

  render() {
    return (
      <FlatList
        data={this.props.data}
        renderItem={({ item }) => {
          console.log(item)
          return (<TodoContainer todo={item} />)
        }} />
    )
  }
}


StyleSheet.create({

})