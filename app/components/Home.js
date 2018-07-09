import React, { Component } from 'react'
import { createStackNavigator } from 'react-navigation'

import Todos from './components/Todos'
import Welcome from './components/Welcome'
import TodoView from './components/TodoView'
import TodoEdit from './components/TodoEdit'
import Footer from './components/Footer'

import navigationService from './navigationService'

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