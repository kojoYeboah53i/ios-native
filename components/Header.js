import React from 'react';
// import text, stylesheet
import {View, Text, StyleSheet} from 'react-native';

const Header = ({title}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.text}> {title} </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 60,
    paddingTop: 15,
    backgroundColor: 'rgb(9, 62, 131)',
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Header;
