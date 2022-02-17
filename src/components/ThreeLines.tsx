import { Square } from 'native-base';
import { StyleSheet, View } from 'react-native';

const ThreeLines = props => {
  return (
    <View>
      <View style={styles.line} />
      <View style={styles.line} />
      <View style={styles.line} />
    </View>
  );
};

const styles = StyleSheet.create({
  line: {
    borderRadius: 4,
    width: 25,
    height: 3,
    backgroundColor: 'white',
    marginVertical: 3,
  },
});

export default ThreeLines;
