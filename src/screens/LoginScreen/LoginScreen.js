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
  static navigatorStyle  = {
    navBarHidden: true,
  };

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
        <LinearGradientBG>
          <View style={style.loginContainer}>
            <LogoWhite />
            <Login
              handleLogin={this.loginHandler}
              handleCreateAccount={this.createAccountHandler}
            />
          </View>
        </LinearGradientBG>

      </KeyboardAvoidingView>
    )

  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
  },
  image: {
    height:250,
    resizeMode: "contain"
  },
  loginContainer: {
    flex:1,
    alignItems: "center",
    justifyContent: "center",
  }
});

export default LoginScreen;