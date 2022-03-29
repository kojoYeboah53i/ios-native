import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Header from './components/header';

const App = () => {
  return (
    <View style={styles.container}>
      <Header title="Shopping List" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
