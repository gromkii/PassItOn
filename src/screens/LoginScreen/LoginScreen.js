import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Image,
  StyleSheet
} from 'react-native';
import Login from '../../components/login/Login';


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

  render() {
    return(
      <KeyboardAvoidingView
        behavior={"position"}
        style={style.container}
      >
        <Image
          source={require('../../../assets/Logo.png')}
          style={style.image}
        />

        <Login handleLogin={this.loginHandler}/>

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