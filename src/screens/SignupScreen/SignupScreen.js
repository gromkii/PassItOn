import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import LogoText from '../../components/Common/LogoText';
import TextField from '../../components/Common/TextField';

class SignupScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={style.container}>
        <LogoText />

        <View>
          <TextField />
          <TextField />
          <TextField />
        </View>
      </View>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default SignupScreen;