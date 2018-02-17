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
  }

  onSubmit() {

  }

  render() {
    return (
      <View>
        <TextInput/>

        <Button
          title={"Create New Account"}
        />

      </View>
    )
  }
}

export default Signup