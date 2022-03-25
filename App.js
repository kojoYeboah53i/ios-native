import React, {useState} from 'react';
// import text, stylesheet
import {View, StyleSheet, FlatList, Alert} from 'react-native';
import Header from './components/Header';
import ListItem from './components/listItem';
import AddItem from './components/addItem';

const App = () => {
  const [items, setItems] = useState([
    {id: 1, text: 'Milk'},
    {id: 2, text: 'Eggs'},
    {id: 3, text: 'Bread'},
    {id: 4, text: 'Juice'},
    {id: 5, text: 'Fish'},
    {id: 6, text: 'Shellfish'},
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
      <Header title="Shoppping List" />
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
