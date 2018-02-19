import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const TextField = (props) => {
  return (
    <TextInput
      style={style.input}
      value={props.value}
      onChangeText={props.onChangeText}
    />
  );
};

const style = StyleSheet.create({
  input: {
    margin:5,
    padding: 5,
    height:55,
    borderWidth:1,
    borderColor:"#cccccc",
    borderRadius:5
  }
});

export default TextField;