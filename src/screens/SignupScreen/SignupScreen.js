import React, { Component } from 'react';
import { StyleSheet, KeyboardAvoidingView, Image } from 'react-native';
import LinearGradientBG from '../../components/Common/LinearGradientBG';

import LogoSolo from '../../../assets/LogoSolo.png';
import Signup from '../../components/login/Signup';


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
        <LinearGradientBG style={style.imgContainer}>
          <Image source={LogoSolo} style={style.image} />

          <Signup />
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
  }
});

export default SignupScreen;