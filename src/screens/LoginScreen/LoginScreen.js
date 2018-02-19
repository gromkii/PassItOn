import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Image,
  StyleSheet
} from 'react-native';
import Login from '../../components/login/Login';
import LogoText from '../../components/Common/LogoText';


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
        <LogoText />

        <Login
          handleLogin={this.loginHandler}
          handleCreateAccount={this.createAccountHandler}
        />

      </KeyboardAvoidingView>
    )

  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"column",
    alignItems:"center",
    justifyContent: "center"
  },
  image: {
    height:250,
    width:250,
    margin:50
  }
});

export default LoginScreen;