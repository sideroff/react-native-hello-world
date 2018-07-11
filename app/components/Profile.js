import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import * as firebase from 'firebase'

import Button from './Button'

import actionTypes from './../actionTypes'

function mapStateToProps(state) {
  return {}
}

class Profile extends Component {
  constructor(props) {
    super(props)

    this.logout = this.logout.bind(this)
  }

  logout() {
    firebase.auth().signOut().catch(error => {
      console.log('logout failed, wat do')
    })
  }

  render() {
    return (
      <View>
        <Button title='Logout' onPress={this.logout}></Button>
      </View>
    )
  }
}

export default connect(mapStateToProps, dispatch => { return { dispatch } })(Profile)