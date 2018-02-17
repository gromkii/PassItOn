import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Image,
  StyleSheet
} from 'react-native';
import Login from './Login';

const style = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"column",
    alignItems:"center"
  },
  image: {
    height:250,
    width:250,
    margin:50
  }
});

class LoginContainer extends Component {
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

export default LoginContainer;