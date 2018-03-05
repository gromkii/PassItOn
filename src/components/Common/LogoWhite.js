import React from 'react';
import { Image, StyleSheet } from 'react-native';

import LogoWhitePath from '../../../assets/LogoGreen.png';

const LogoWhite = () => {
  return  <Image source={LogoWhitePath} style={style.image} />
};

const style = StyleSheet.create({
  image: {
    // height: 150,
    // width: 150,
  }
});

export default LogoWhite;