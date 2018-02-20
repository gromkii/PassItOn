import React, { Component } from 'react';
import { View, Text, StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import TextField from '../../components/Common/TextField';
import LinearGradientBG from '../../components/Common/LinearGradientBG';

import LogoSolo from '../../../assets/LogoSolo.png';


class SignupScreen extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <KeyboardAvoidingView style={style.container} behavior="position">
        <LinearGradientBG style={style.imgContainer}>
          <Image source={LogoSolo} style={style.image} />

          <View>
            <TextField />
            <TextField />
            <TextField />
          </View>
        </LinearGradientBG>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center"
  },
  imgContainer: {
    width:"100%",
    alignItems: "center",
    justifyContent: "space-around"
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "column"
  },
  image: {
    height: 50,
    width: 50,
  }
});

export default SignupScreen;