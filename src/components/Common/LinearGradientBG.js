import React  from 'react';
import { StyleSheet, ImageBackground } from 'react-native';

import LinearGradientBGPath from '../../../assets/LinearGradientBackground.png';
const LinearGradientBG = (props) => {
  return (
    <ImageBackground source={LinearGradientBGPath} style={[style.image, props.style]}>
      {props.children}
    </ImageBackground>
  );
};

const style = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    justifyContent: "center",
  }
});

export default LinearGradientBG;