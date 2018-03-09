import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import NewNote from '../../components/Notes/NewNote';

class NewNoteScreen extends Component {
  render() {
    return (
      <View style={style.container}>
        <NewNote />
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