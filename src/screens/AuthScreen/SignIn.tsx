import Constants from 'expo-constants';
import * as Linking from 'expo-linking';
import * as WebBrowser from 'expo-web-browser';
import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Api from '../../Api';
import { Button } from '../../components/Button';
import Field from './Field';
import SocialAuth from '../../components/Auth/SocialAuth';
import { save } from '../../utils/authUtils';

export default function SignIn({ navigation }) {
  const email = useRef<string>('');
  const password = useRef<string>('');

  const submit = async () => {
    try {
      const response = await new Api().users.login({
        email: email.current,
        password: password.current,
      });
      console.log(response);
    } catch (e) {
      console.error(e.response?.data);
    }
  };

  const _openAuthSessionAsync = async () => {
    try {
      const result = await WebBrowser.openAuthSessionAsync(
        `https://dev.api.musicroom.benjaminnoufel.com/users/login/discord/redirect?redirectUrl=${Linking.createURL(
          '/',
        )}`,
        Constants.linkingUri,
      );
      let redirectData;
      if (result.type === 'success' && result.url) {
        redirectData = Linking.parse(result.url);
        console.log(result.url);
        await save('userToken', redirectData.queryParams.token);
      }
      console.log(redirectData);
      const meResponse = await new Api().users.me();
      console.log(meResponse.data);
    } catch (error) {
      alert(error);
      console.log(error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, paddingBottom: 40 }}>Connexion</Text>
      <Field
        name="Email"
        textInputProps={{ onChangeText: value => (email.current = value) }}
      />
      <Field
        name="Mot de passe"
        textInputProps={{
          secureTextEntry: true,
          onChangeText: value => (password.current = value),
        }}
      />
      <View style={{ marginTop: 30, width: 200 }}>
        <Button name="valider" onPress={submit} />
      </View>
      <View style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginVertical: 20 }}>
        <SocialAuth/>
      </View>
      <Text
        style={{
          backgroundColor: '#464646',
          color: 'white',
          padding: 10,
          borderRadius: 20,
          margin: 10,
        }}
        onPress={() => navigation.navigate('ForgotPassword')}>
        J'ai oublié mon mot de passe
      </Text>
      <Text
        style={{
          backgroundColor: '#464646',
          color: 'white',
          padding: 10,
          borderRadius: 20,
          margin: 10,
        }}
        onPress={() => navigation.navigate('SignUp')}>
        Je n'ai pas de compte
      </Text>
      <Text onPress={_openAuthSessionAsync}>42</Text>
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
