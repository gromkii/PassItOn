import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  View
} from 'react-native';

import Login from '../../components/login/Login';
import LinearGradientBG from '../../components/Common/LinearGradientBG';
import LogoWhite from '../../components/Common/LogoWhite';


class LoginScreen extends Component {
  loginHandler = (username) => {
    this.props.navigator.push({
      screen:'com.pass.Home',
      passProps: {
        username
      }
    });
  };

  createAccountHandler = () => {
    this.props.navigator.push({
      screen:'com.pass.Signup',
      title: 'Create New Account'
    })
  };

  render() {
    return(
      <KeyboardAvoidingView
        behavior={"position"}
        style={style.container}
      >
          <View style={style.loginContainer}>
            <LogoWhite />
            <Login
              handleLogin={this.loginHandler}
              handleCreateAccount={this.createAccountHandler}
            />
          </View>
      </KeyboardAvoidingView>
    )

  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#FFFEF4",
    justifyContent: "center",
  },
  image: {
    height:250,
    resizeMode: "contain"
  },
  loginContainer: {
    alignItems: "center",
    justifyContent: "center",
  }
});

export default LoginScreen;