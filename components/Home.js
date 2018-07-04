import React from 'react'
import { connect } from "react-redux"

import { View, Text, Button } from 'react-native'

import actionTypes from './../actionTypes'

function mapStateToProps(state) {

  return { test: state.currentUser.test, stateProp: 321 }
}

class Home extends React.Component {
  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
    console.log('тхис ', this)
  }

  onButtonPress() {
    console.log('this 2', this)
    this.props.dispatch({ type: actionTypes.TEST, payload: 'heyy' })
  }

  render() {
    return (
      <View >
        <Text>Welcome to Errands!</Text>
        <Text>{JSON.stringify(this.props.test)}</Text>
        <Button title='press me' onPress={this.onButtonPress}>Press me</Button>
      </View>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return { dispatch: dispatch, ebre: 123 }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)