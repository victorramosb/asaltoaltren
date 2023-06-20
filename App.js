// npx create-expo-app coltexpress
import { StatusBar } from 'expo-status-bar';
import * as React from 'react'
import { StyleSheet, Text, View } from 'react-native';
import CarRoof  from './components/CarRoof.js';
import CarFloor from './components/CarFloor.js';

const initialTrain = [
  {'objects':[
    // {'type':'Purse'    , 'level':'floor'},
    {'type':'Jewel'    , 'level':'roof'},
    // {'type':'Strongbox', 'level':'floor'},
  ]},
  {'objects':[
    // {'type':'Purse'    , 'level':'floor'},
    {'type':'Jewel'    , 'level':'floor'},
    {'type':'Jewel'    , 'level':'floor'},
    // {'type':'Strongbox', 'level':'floor'},
  ]},
];

const initialDeck = ['move','move','switch','switch', 'fire', 'fire', 'rob', 'rob', 'marshal', 'punch']

export default function App() {
  
  const [ myLevel,  setMyLevel] = React.useState('floor') // roof
  const [   myCar,    setMyCar] = React.useState()
  const [  myDeck,   setMyDeck] = React.useState(initialDeck)
  const [myBarrel, setMyBarrel] = React.useState(6)

  const [train, setTrain] = React.useState(initialTrain)

  //Purse Jewel Strongbox

  const {gridStyle, container} = styles

  React.useEffect(() => {
    if (true) {
      
    }
  }, [])

  console.log('////////////////////////////////////');
  return (
    <View style={container}>
      <View style={gridStyle}>
        {train.map( (car, index)=> {
          return <CarRoof  key={index} car={car}/>
        })}
      </View>
      
      <View style={gridStyle}>
        {train.map( (car, index)=> {
          return <CarFloor key={index} car={car}/>
        })}
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  gridStyle: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    backgroundColor: '#fff',
    flexWrap: 'wrap',
  },
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
