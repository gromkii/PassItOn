import React from 'react';
import { Image, StyleSheet } from 'react-native';

import LogoWhitePath from '../../../assets/LogoWhite.png';

const LogoWhite = () => {
  return  <Image source={LogoWhitePath} style={style.image} />
};

const style = StyleSheet.create({
  image: {
    height: 250,
    width: 250,
  }
});

export default LogoWhite;