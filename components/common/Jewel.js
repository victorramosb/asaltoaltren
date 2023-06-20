import { StyleSheet, Image } from 'react-native';
import * as React from 'react'

export default function Jewel({ }) {
  const { imageStyle } = styles
  
  return <Image style={ imageStyle } source={ require('../img/jewel.png')  }/>
}

const styles = StyleSheet.create({
  imageStyle: {
    width: 60,
    height: 60,
    borderRadius: 75,
    backgroundColor: '#f88',
  },
});
