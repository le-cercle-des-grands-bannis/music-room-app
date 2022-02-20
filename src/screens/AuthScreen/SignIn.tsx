import { login } from '@redux/auth/auth.slice';
import React, { useRef, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Checkbox } from 'react-native-paper';

import SocialAuth from '../../components/Auth/SocialAuth';
import { Button } from '../../components/Button';
import { useAppDispatch } from '../../hooks/redux';
import Field from './Field';

export default function SignIn({ navigation }) {
  const dispatch = useAppDispatch();

  const email = useRef<string>('');
  const password = useRef<string>('');
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const submit = async () => {
    try {
      dispatch(
        login({
          email: email.current,
          password: password.current,
          rememberMe,
        }),
      );
    } catch (e) {
      console.error(e);
    }
  };

  // const _openAuthSessionAsync = async () => {
  //   try {
  //     const result = await WebBrowser.openAuthSessionAsync(
  //       `http://10.0.2.2:4242/users/login/discord/redirect?redirectUrl=${Linking.createURL(
  //         '/',
  //       )}`,
  //       Constants.linkingUri,
  //     );
  //     let redirectData;
  //     if (result.type === 'success' && result.url) {
  //       redirectData = Linking.parse(result.url);
  //       console.log(result.url);
  //     }
  //     console.log(redirectData);
  //   } catch (error) {
  //     alert(error);
  //     console.log(error);
  //   }
  // };

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
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 10,
        }}>
        <Text>Se souvenir de moi</Text>
        <Checkbox
          status={rememberMe ? 'checked' : 'unchecked'}
          onPress={() => setRememberMe(prevState => !prevState)}
          color="grey"
        />
      </View>
      <View style={{ marginTop: 10, width: 200 }}>
        <Button name="valider" onPress={submit} />
      </View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: 20,
        }}>
        <SocialAuth />
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
