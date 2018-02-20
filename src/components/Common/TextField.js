import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField = (props) => {
  return (
    <TextInput
      style={style.input}
      value={props.value}
      onChangeText={props.onChangeText}
      secureTextEntry={props.secureTextEntry}
      placeholder={props.placeholder}
      autoCapitalize="none"
    />
  );
};

const style = StyleSheet.create({
  input: {
    margin:15,
    padding: 10,
    height:55,
    borderWidth:1,
    borderColor:"#cccccc",
    borderRadius:5,
    backgroundColor: "#ACE0E2",
    color: "#2c2c2c",
    width: "80%"
  }
});

export default TextField;