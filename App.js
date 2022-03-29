import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello World</Text>
      <Image source={{uri: 'https://randomuser.me/api/portraits/men/1.jpg'}} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: 'darkslateblue',
  },
  img: {
    width: 100,
    height: 100,
    borderRadius: 100/2,
  },
});

export default App;
