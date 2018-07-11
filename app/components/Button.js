import React, { Component } from 'react'
import {
  ActivityIndicator,
  StyleSheet,
  View,
  Text,
  TouchableOpacity
} from 'react-native'

export default class Button extends Component {
  constructor(props) {
    super(props)

    this.onPress = this.onPress.bind(this)
  }

  onPress() {
    this.props.onPress()
  }

  getValidButtonCOntents() {
    if (this.props.isPerformingActivity) {
      return <ActivityIndicator />
    }
    return <Text>{this.props.title}</Text>
  }

  render() {
    return (
      <View style={this.props.style}>
        <TouchableOpacity onPress={this.props.onPress} style={styles.touchable} disabled={this.props.isPerformingActivity}>
          {this.getValidButtonCOntents()}
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  touchable: {
    backgroundColor: 'aqua',
    borderRadius: 2,
    padding: 10
  },
  touchableText: {
    fontSize: 20
  }
})