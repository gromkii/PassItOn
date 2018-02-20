import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const BigButton = props => {
  return (
    <TouchableOpacity onPress={props.onPress} style={style.button}>
      <View style={style.container}>
        {props.children}
      </View>
    </TouchableOpacity>
  )
};

const style = StyleSheet.create({
  button: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#FF00BA",
    height: 48,
    padding: 10,
    margin: 15,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    width: "40%"
  }
});

export default BigButton;