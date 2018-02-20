import React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';

// TODO: Touchable is full width, just the view needs to be that long. Contain Touchable in view.

const BigButton = props => {
  return (
    <View style={style.button}>

    <TouchableOpacity onPress={props.onPress} style={style.button}>
      <View style={style.container}>
        {props.children}
      </View>
    </TouchableOpacity>
    </View>
  )
};

const style = StyleSheet.create({
  button: {
    width: "80%",
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
    width: "80%"
  }
});

export default BigButton;