import React, {useState} from 'react';
// import text, stylesheet
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
// import { uuid } from 'uuidv4';
import { v4 as uuidv4 } from 'uuid';

const App = () => {
  // const [items, setItems] = useState([
  //   {id: uuid(), text: 'Milk'},
  //   {id: uuid(), text: 'Eggs'},
  //   {id: uuid(), text: 'Bread'},
  //   {id: uuid(), text: 'Juice'},
  //   {id: uuid(), text: 'Fish'},
  // ]);
  console.log(uuidv4());
  return (
    <View style={styles.container}>
      <Header title="Rovo Auto Services" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
