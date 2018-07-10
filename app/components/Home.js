import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import Todos from './Todos'
import Welcome from './Welcome'
import TodoView from './TodoView'
import TodoEdit from './TodoEdit'

import navigationService from './../navigationService'

const Router = createStackNavigator({
  Todos: { screen: Todos },
  Welcome: { screen: Welcome },
  TodoView: { screen: TodoView },
  TodoEdit: { screen: TodoEdit },
  TodoCreate: { screen: TodoEdit },
})

export default class Home extends Component {
  render() {
    return (
      <Router ref={navigationRef => navigationService.init(navigationRef)} />
    )
  }
}