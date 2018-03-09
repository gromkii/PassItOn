import React, { Component } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import Sketch from 'react-native-sketch';

class NewNote extends Component {

  constructor(props) {
    super(props);
  }

  clear = () => {
    this.sketch.clear();
  };

  save = () => {
    this.sketch.save().then(({ path }) => {
      console.log(`The image is saved there: ${path}`); // eslint-disable-line no-console
    });
  };

  render() {
    return (
      <View style={style.container}>
        <Sketch
          ref={sketch => {
            this.sketch = sketch;
          }}
        />
        <View style={style.actionsBar}>
          <Button color="#EA212E" onPress={this.clear} title=" Clear" />
          <Button color="#1DBD21" onPress={this.save} title="Save  " />
        </View>
      </View>
    )
  }
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#F5FCFF',
    paddingTop: 20,
    width: "100%",
    height: "100%"
  },
  actionsBar: {
    alignItems: 'stretch',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
});

export default NewNote;