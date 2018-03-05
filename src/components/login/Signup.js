import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import axios from 'axios';
import TextField from '../Common/TextField';
import BigButton from '../Common/BigButton';

const API_URL = 'http://127.0.0.1:3000/api';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
      email:'',
      password:''
    };
  }

  onSubmit = () => {
    axios.post(API_URL + '/auth/signup', {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password
    })
      .then(res => {
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };

  render() {
    return (
      <View style={style.container}>
          <TextField
            placeholder={"Username"}
            onChangeText={username => this.setState({username})}
            value={this.state.username}
          />

          <TextField
            placeholder={"Email Address"}
            onChangeText={email => this.setState({email})}
            value={this.state.email}
          />

          <TextField
            placeholder={"Password"}
            onChangeText={password => this.setState({password})}
            value={this.state.password}
            secureTextEntry={true}
          />

        <BigButton>
          <Text style={style.buttonStyle}>
            Sign Up!
          </Text>
        </BigButton>

      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    color: "#fff",
    fontSize: 18
  }
});

export default Signup;