import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loading from './Loading'
import Authenticate from './Authenticate'
import BottomTabNavigator from './BottomTabNavigator'

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

class LoadingAuthOrApp extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    let CorrectComponent = Authenticate

    if (!this.props.currentUser) {
      CorrectComponent = Loading
    } else if (Object.keys(this.props.currentUser).length > 0) {
      CorrectComponent = BottomTabNavigator
    }

    return (
      <CorrectComponent />
    )
  }
}


export default connect(mapStateToProps)(LoadingAuthOrApp)