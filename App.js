import React, {useState} from 'react';
// import text, stylesheet
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';
// import PrintingFile from './components/printingFile';
// import NewButton from './components/newModuleButton';

// import ABC from './CustomModule';

const App = () => {
  // ABC.show();

  const [items, setItems] = useState([
    {id: 120, text: 'Tires'},
    {id: 2000, text: 'Brakes'},
    {id: 323, text: 'Alignment'},
    {id: 448, text: 'Balancing'},
    {id: 105, text: 'Oil Change'},
    {id: 603, text: 'Car diagnostics'},
  ]);
  // console.log(uuid());
  // uuidv4();
  const deleteItem = id => {
    setItems(prevItems => {
      return prevItems.filter(item => item.id !== id);
    });
  };

  const addItem = item => {
    if (!item) {
      Alert.alert('cannot enter empty text');
    } else {
      setItems(prevItems => {
        return [{id: 7, text: item}, ...prevItems];
      });
    }
  };
  return (
    <View style={styles.container}>
      <Header title="Rovo Auto Center" />
      <AddItem addItem={addItem} />
      <FlatList
        data={items}
        renderItem={({item}) => (
          <ListItem item={item} deleteItem={deleteItem} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
  },
});

export default App;
