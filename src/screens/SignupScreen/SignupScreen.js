import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image, View } from 'react-native';
import LinearGradientBG from '../../components/Common/LinearGradientBG';

import LogoSolo from '../../../assets/LogoSolo.png';
import Signup from '../../components/login/Signup';
import LogoWhite from '../../components/Common/LogoWhite';


class SignupScreen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      password: ''
    }
  }

  render() {
    return (
      <KeyboardAvoidingView style={style.container} behavior="position">
        <View style={style.signupContainer}>
          <LogoWhite />
          <Signup />
        </View>
      </KeyboardAvoidingView>
    );
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFFEF4",
  },
  imgContainer: {
    alignItems: "center",
    justifyContent: "space-around"
  },
  inputContainer: {
    alignItems: "center",
    flexDirection: "column"
  },
  image: {
    resizeMode: "contain",
    width: 150,
  },
  signupContainer: {
    alignItems:"center",
  }
});

export default SignupScreen;