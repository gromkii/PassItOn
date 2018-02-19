import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import axios from 'axios';

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
        <TextInput
          style={style.input}
          value={this.state.username}
          onChangeText={username => this.setState({username})}
        />

        <TextInput
          style={style.input}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />

        <Button
          onPress={this.onLogin}
          title={"Login"}
        />

        <Button
          onPress={this.onCreateAccount}
          title={"Sign Up!"}
        />

      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex:1,
  },
  input: {
    margin:5,
    padding: 5,
    height:55,
    borderWidth:1,
    borderColor:"#cccccc",
    borderRadius:5
  }
});

export default Login;