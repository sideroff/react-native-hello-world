import React from 'react'
import { StyleSheet, View, Text, Button, FlatList, Dimensions } from 'react-native'
import TodoContainer from './TodoContainer'

//should be more abstract so as to accept custom components & properties to send them
export default class CustomList extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View style={styles.customListContainer}>
        <FlatList
          data={this.props.data}
          renderItem={({ index, item }) => {
            return (
              <TodoContainer
                todo={item}
                key={index}
                onTodoPressed={() => this.props.onTodoPressed(index)}
                onTodoMarkedDone={() => this.props.onTodoMarkedDone(index)} />
            )
          }} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  customListContainer: {
    height: Dimensions.get('window').height / 2
  }
})