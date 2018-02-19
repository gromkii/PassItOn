import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Image,
  StyleSheet
} from 'react-native';
import Login from '../../components/login/Login';

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

class LoginScreen extends Component {
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

        <Login />

      </KeyboardAvoidingView>
    )

  }
}

export default LoginScreen;