import React from 'react';
import {StyleSheet, View} from 'react-native';

const LineSeparator = () => {
  return <View style={styles.line} />;
};

const styles = StyleSheet.create({
  line: {
    width: '90%',
    height: 1,
    marginHorizontal: '5%',
    backgroundColor: '#979797',
    opacity: 0.34,
  },
});

export default LineSeparator;
