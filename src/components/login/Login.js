import React, { Component } from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet
} from 'react-native';
import axios from 'axios';
import TextField from '../Common/TextField';
import BigButton from '../Common/BigButton';


class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  onLogin = () => {
    axios.post('http://127.0.0.1:3000/api/auth/login', {
      username: this.state.username,
      password: this.state.password
    })
      .then(res => {
        if (res.data) {
          this.props.handleLogin(this.state.username);
        }
      })
      .catch(err => {
        console.log(err);
      })
  };

  onCreateAccount = () => {
    this.props.handleCreateAccount();
  };


  render() {
    return (
      <View style={style.container}>

        <TextField
          value={this.state.username}
          onChangeText={username => this.setState({username})}
          secureTextEntry={false}
          placeholder="Username"
        />

        <TextField
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          placeholder="Password"
          secureTextEntry={true}
        />

        {/*
        <Button
          onPress={this.onLogin}
          title={"Login"}
        />

        <Button
          onPress={this.onCreateAccount}
          title={"Sign Up!"}
        />
        */}

        <BigButton onPress={this.onLogin}>
          <Text style={style.buttonStyle}>
            Login
          </Text>
        </BigButton>

        <BigButton onPress={this.onCreateAccount}>
          <Text style={style.buttonStyle}>
            Sign up!
          </Text>
        </BigButton>

      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width:"100%",
    alignItems: "center",
    justifyContent: "center"
  },
  input: {
    margin:5,
    padding: 5,
    height:55,
    borderWidth:1,
    borderColor:"#cccccc",
    borderRadius:5
  },
  buttonStyle: {
    color:"#fff",
    fontSize:24,
  }
});

export default Login;