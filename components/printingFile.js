import React from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
//import fontawesome from vector icons
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const PrintingFile = () => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.listItemView}>
        <Text style={styles.printText}>Print</Text>
        <Icon name="printer" size={20} color="coral" />
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  printText: {
    fontSize: 18,
  },
});
export default PrintingFile;
