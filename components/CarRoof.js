import { StyleSheet, View } from 'react-native';  
import * as React from 'react'
import Jewel from './common/Jewel.js';

export default function CarRoof({ car }) {
  const { carRoofStyle } = styles
  // console.log('car: ', car);
  return (
    <View style={carRoofStyle}>
      {car.objects.map( (obj, index)=> {
        console.log('obj: ', obj);
        if (obj.level === 'roof') {
          switch (obj.type) {
            case 'Jewel'    : return <Jewel     key={index}/>
            case 'Purse'    : return <Purse     key={index}/>
            case 'Strongbox': return <Strongbox key={index}/>
            default:
              break;
          }
        }
      })}
    </View>
  )
}

const styles = StyleSheet.create({
  carRoofStyle: {
    flex: 1,
    // height: '100%',
    // borderWidth: 2,
    backgroundColor: '#9ef',
    alignItems: 'flex-end',
    justifyContent: 'space-evenly',
  },    
});

