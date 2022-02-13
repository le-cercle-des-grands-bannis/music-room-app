import React from 'react';
import { StyleSheet, TextInput, TextInputProps, View } from 'react-native';

const TextField = (props: { textInputProps?: TextInputProps }) => {
  return (
    <View style={styles2.textField}>
      <TextInput
        style={{ height: 40, textAlign: 'center' }}
        {...props.textInputProps}
      />
    </View>
  );
};

export default TextField;

const styles2 = StyleSheet.create({
  textField: {
    // flex: 1,
    flexShrink: 1,
    justifyContent: 'center',
    backgroundColor: '#d3d3d3',
    borderRadius: 20,
    borderStyle: 'solid',
    borderColor: '#000',
    borderWidth: 3,
    width: 200,
    height: 40,
    paddingHorizontal: 10,
  },
});
