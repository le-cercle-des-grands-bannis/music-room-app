import React from 'react';
import { Text, TextInputProps, View } from 'react-native';

import TextField from './TextField';

const Field = (props: { name: string; textInputProps?: TextInputProps }) => {
  return (
    <View>
      <View style={{ alignItems: 'center', paddingVertical: 10 }}>
        <Text>{props.name}</Text>
      </View>
      <TextField textInputProps={props.textInputProps} />
    </View>
  );
};

export default Field;
