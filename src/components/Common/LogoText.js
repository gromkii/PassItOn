import React from 'react';
import { StyleSheet, Image } from 'react-native';
import LogoTextPath from '../../../assets/Logo.png';

const LogoText = () => {
  return (
    <Image
      source={LogoTextPath}
      style={style.image}
    />
  )
};

const style = StyleSheet.create({
  image: {
    height:250,
    width:250,
    margin:50
  }
});

export default LogoText;