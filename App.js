import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';
import { State } from 'react-native-gesture-handler';

export default class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = { text: '' }
    this.onChangeText = this.onChangeText.bind(this)
  }

  onChangeText(text) {
    console.log(text)
    this.setState({ text })
  }

  render() {
    let src = {
      uri: 'https://hdwallpaperim.com/wp-content/uploads/2017/08/22/331178-Earth-space-planet-portrait_display-748x1330.jpg'
    }
    let landingPageBackground = { uri: 'https://i.imgur.com/knKV8SQ.png' }

    return (

      <View>
        <View>
          <Image source={landingPageBackground} resizeMode={'repeat'} style={{ height: 200, width: 200 }} />
        </View>
        <View style={{ height: 300, flexDirection: 'row', justifyContent: 'center', alignItems: 'stretch' }}>
          <View style={{ width: 50, height: 50, backgroundColor: 'red' }}></View>
          <View style={{ width: 30, height: 30, backgroundColor: 'blue' }}></View>
          <View style={{ width: 10, backgroundColor: 'green' }}></View>
        </View>

        <View>
          <TextInput onChangeText={this.onChangeText} />
          <Button onPress={() => {
            Alert.alert('you tapped the button')
          }} title='my-button' />
        </View>

        <Greeting name='goshko' />
        <Image source={src} style={{ width: 193, height: 110 }} />
        <Blink style={styles.red} />
        <Blink style={styles.blue} />
      </View>
    );
  }
}


class Greeting extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <Text >{this.props.name}</Text>
    )
  }
}

class Blink extends React.Component {
  constructor(props) {
    super(props)
    this.state = { shouldShow: true }

    setInterval(() => {
      this.setState(prevState => {
        return { shouldShow: !prevState.shouldShow }
      })
    }, 1000)
  }

  render() {
    return (
      this.state.shouldShow && <Text style={this.props.style}>Blinking text</Text>
    )
  }
}


const styles = StyleSheet.create({
  blue: {
    color: 'blue',
    fontWeight: 'bold',
    fontSize: 30
  },
  red: {
    color: 'red',
    fontWeight: '100'
  }
})