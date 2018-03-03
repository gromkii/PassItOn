import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

class HomeScreen extends Component {
  constructor(props) {
    super(props);
  }

  onNewNote = () => {
    this.props.navigator.push({
      screen:'com.pass.NewNote',
      title: 'New Note'
    });
  };

  onMyNotes = () => {
    this.props.navigator.push({
      screen:'com.pass.ViewNotes',
      title: 'My Notes'
    })
  };

  render() {
    return (
      <View style={style.container}>
        <TouchableOpacity style={style.touchable} onPress={this.onNewNote}>
          <View style={style.buttonContainer}>
            <Text style={style.buttonText}>
              Create New Note
            </Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={style.touchable} onPress={this.onMyNotes}>
          <View style={style.buttonContainer}>
            <Text style={style.buttonText}>
              View My Notes
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  touchable: {
    width: "100%",
    justifyContent:"center",
    alignItems: "center",
    margin: 5
  },
  buttonContainer: {
    width: "40%",
    height: 55,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "orange",
    borderRadius: 5,
  },
  buttonText: {
    color: "white"
  }
});

export default HomeScreen;