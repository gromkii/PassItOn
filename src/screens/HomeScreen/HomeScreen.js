import React, { Component } from 'react';
import { View, Text } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        <Text>Welcome, {this.props.username}</Text>
      </View>
    )
  }
}

export default HomeScreen;