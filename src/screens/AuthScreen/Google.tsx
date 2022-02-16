import React, { useRef } from 'react';
import { View, Text, StyleSheet, WebView } from 'react-native';

import Api from '../../Api';
import { Button } from '../../components/Button';
import Field from './Field';
import * as Linking from 'expo-linking';

export default function SignIn({ navigation }) {
  const email = useRef<string>('');
  const password = useRef<string>('');

  const submit = async () => {
    try {
      const response = await new Api().users.login({
        email: email.current,
        password: password.current,
      });
      // console.log(response.data);
      const meResponse = await new Api().users.me();
      console.log(meResponse.data);
    } catch (e) {
      console.error(e.response?.data);
    }
  };

  return (
    <View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexShrink: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  SubmitButtonStyle: {
    marginTop: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginLeft: 30,
    marginRight: 30,
    backgroundColor: '#464646',
    borderRadius: 30,
    borderWidth: 1,
    borderColor: '#fff',
  },
});

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
