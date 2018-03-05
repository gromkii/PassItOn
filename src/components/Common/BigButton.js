import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

const BigButton = props => {
  return (
    <View style={style.bigContainer}>
      <TouchableOpacity onPress={props.onPress} style={style.button}>
        <View style={style.container}>
          {props.children}
        </View>
      </TouchableOpacity>
    </View>
  )
};

const style = StyleSheet.create({
  bigContainer: {
    width: "100%",
    alignItems:"center"
  },
  button: {
    width: "60%",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    backgroundColor: "#77E9BF",
    height: 48,
    padding: 10,
    margin: 15,
    alignItems:"center",
    justifyContent:"center",
    borderRadius:5,
    width: "100%"
  }
});

export default BigButton;