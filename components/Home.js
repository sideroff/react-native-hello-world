import React from 'react'
import { View, Button } from 'react-native'

export default class Home extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <View>
        <View>home screen</View>
        <Button title='go to welcome' onPress={() => {
          this.props.navigation.navigate('Welcome')
        }}></Button>
      </View>
    )
  }
}