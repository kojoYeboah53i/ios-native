import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
//import fontawesome from vector icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const ListItem = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.listItemText}>{item.text}</Text>
        <Icon
          name="remove"
          size={20}
          color="firebrick"
          onPress={() => deleteItem(item.id)}
        />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: '#f8f8f8',
    borderColor: '#f0f0f0',
    borderWidth: 1,
    padding: 15,
  },
  listItemView: {
    backgroundColor: '#f8f8f8',
    borderColor: '#f0f0f0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  listItemText: {
    fontSize: 18,
  },
});
export default ListItem;
