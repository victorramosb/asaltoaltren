import { StyleSheet, View, ImageBackground } from 'react-native';
import * as React from 'react'
import Jewel from './common/Jewel.js';

export default function CarFloor({ car }) {
  const { carFloorStyle } = styles
  // console.log('car: ', car);
  return (
    <ImageBackground style={carFloorStyle} /* source={require('./img/vagon2.png')} */ >
      {car.objects.map( (obj, index)=> {
        console.log('obj: ', obj);
        if (obj.level === 'floor') {
          switch (obj.type) {
            case 'Jewel'    : return <Jewel     key={index}/>
            case 'Purse'    : return <Purse     key={index}/>
            case 'Strongbox': return <Strongbox key={index}/>
            default:
              break;
          }
        }
      })}
    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  carFloorStyle: {
    flex: 1,
    // height: '100%',
    borderWidth: 2,
    backgroundColor: '#0f0',
    alignItems: 'flex-end', // items en el "piso"
    justifyContent: 'space-evenly',
  },
});
