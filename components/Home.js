import React from 'react'
import { View, Text, Button } from 'react-native'

export default class Home extends React.Component {

  static navigationOptions= {
    header: null
  }

  constructor(props) {
    super(props)

    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log(this)
    this.props.navigation.navigate('Welcome')
  }

  render() {
    return (
      <View>
        <Text>home screen</Text>
        <Button title='go to Welcome' onPress={this.onButtonPress}></Button>
      </View>
    )
  }
}