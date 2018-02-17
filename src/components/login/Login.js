import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import axios from 'axios';

const style = StyleSheet.create({
  container: {
    flex:1,
  },
  input: {
    margin:20,
    height:55,
    borderWidth:1,
    borderColor:"#cccccc",
    borderRadius:5
  }
});

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };

    this.onLogin = this.onLogin.bind(this);
  }

  onLogin() {
    axios.get('http://127.0.0.1:3000/api/auth/login')
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  }


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
          value={this.state.username}
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />

        <Button
          onPress={this.onLogin}
          title={"Login"}
        />
      </View>
    )
  }
}

export default Login;