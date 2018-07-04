import React from 'react'
import { connect } from "react-redux"

import { View, Text, Button, StyleSheet } from 'react-native'

import actionTypes from './../actionTypes'

function mapStateToProps(state) {
  return { test: state.currentUser.test, stateProp: 321 }
}

class Welcome extends React.Component {
  static navigationOptions = {
    title: 'Welcome'
  }

  constructor(props) {
    super(props)
    this.onButtonPress = this.onButtonPress.bind(this)
  }

  onButtonPress() {
    console.log('going to Home',this)

    this.props.navigation.navigate('Home')
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.heading}>
          <Text style={styles.headingTwo}>Welcome to</Text>
          <Text style={styles.headingOne}>Errands</Text>
        </View>
        <View>
        </View>
        <Text>{JSON.stringify(this.props.test)}</Text>
        <Button title='press me!' onPress={this.onButtonPress}>Press me!!</Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  heading: {
    alignItems: 'center'
  },
  headingOne: {
    fontSize: 50
  },
  headingTwo: {
    fontSize: 20
  }
})

export default connect(mapStateToProps, dispatch => { return { dispatch } })(Welcome)