import React from 'react';
import { Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { Footer, FooterTab, Button, Icon, Text as NBText } from 'native-base'

class Lucy extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Lucy</Text>
      </View>
    );
  }
}

class Nine extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Nine</Text>
      </View>
    );
  }
}

class Jade extends React.Component {
  componentWillMount() {
    console.log('heree')
  }
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Jade</Text>
      </View>
    );
  }
}

export default TabNavigator({
  Lucy: { screen: Lucy },
  Nine: { screen: Nine },
  Jade: { screen: Jade }
},
  {
    tabBarPosition: 'bottom',
    swipeEnabled: false,
    tabBarComponent: props => {
      return (
        <Footer>
          <FooterTab>
            <Button
              vertical
              active={props.navigationState.index === 0}
              onPress={() => props.navigation.navigate("Home")}>
              <NBText>Home</NBText>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 1}
              onPress={() => props.navigation.navigate("Profile")}>
              <NBText>Profile</NBText>
            </Button>
            <Button
              vertical
              active={props.navigationState.index === 2}
              onPress={() => props.navigation.navigate("Settings")}>
              <Text>Settings</Text>
            </Button>
          </FooterTab>
        </Footer>
      );
    }
  });