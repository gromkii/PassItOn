import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class NewNoteScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text>New Notes</Text>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default NewNoteScreen;