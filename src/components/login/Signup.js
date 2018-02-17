import React, { Component } from 'react';
import {
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
import axios from 'axios';

class Signup extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username:'',
      email:'',
      password:''
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onReturnToLogin = this.onReturnToLogin.bind(this);
  }

  onSubmit() {

  }

  onReturnToLogin() {

  }

  render() {
    return (
      <View>
        <TextInput
          style={style.input}
          value={this.state.username}
          onChangeText={username => this.setState({username})}
        />

        <TextInput
          style={style.input}
          value={this.state.email}
          onChangeText={email => this.setState({email})}
        />

        <TextInput
          style={style.input}
          value={this.state.password}
          onChangeText={password => this.setState({password})}
          secureTextEntry={true}
        />


        <Button
          title={"Create New Account"}
          onPress={this.onSubmit}
        />

        <Button
          title={"Return to Login"}
          onPress={this.onReturnToLogin}
        />


      </View>
    )
  }
}

export default Signup