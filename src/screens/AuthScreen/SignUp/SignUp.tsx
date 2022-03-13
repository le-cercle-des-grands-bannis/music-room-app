import { NavigationProp } from '@react-navigation/native';
import { register } from '@redux/auth/auth.slice';
import { AppDispatch } from '@redux/store';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { useDispatch } from 'react-redux';

import { Button } from '../../../components/Button';
import Field from '../Field';

export default function SignUp({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const dispatch = useDispatch<AppDispatch>();

  const username = useRef<string>('');
  const email = useRef<string>('');
  const emailConfirmation = useRef<string>('');
  const password = useRef<string>('');
  const passwordConfirmation = useRef<string>('');

  const submit = async () => {
    try {
      const data = await dispatch(
        register({
          username: username.current,
          email: email.current,
          email_confirmation: emailConfirmation.current,
          password: password.current,
          password_confirmation: passwordConfirmation.current,
        }),
      );
    } catch (e) {
      console.error(e.response.data);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ fontSize: 30, paddingBottom: 10 }}>Inscription</Text>
      <Field
        name="Nom d'utilisateur"
        textInputProps={{
          autoCompleteType: 'username',
          textContentType: 'username',
          onChangeText: value => (username.current = value),
        }}
      />
      <Field
        name="Email"
        textInputProps={{
          autoCompleteType: 'email',
          textContentType: 'emailAddress',
          keyboardType: 'email-address',
          onChangeText: value => (email.current = value),
        }}
      />
      <Field
        name="Confirmation email"
        textInputProps={{
          autoCompleteType: 'email',
          textContentType: 'emailAddress',
          onChangeText: value => (emailConfirmation.current = value),
        }}
      />
      <Field
        name="Mot de passe"
        textInputProps={{
          secureTextEntry: true,
          autoCompleteType: 'password',
          textContentType: 'password',
          onChangeText: value => (password.current = value),
        }}
      />
      <Field
        name="Confirmation mot de passe"
        textInputProps={{
          secureTextEntry: true,
          autoCompleteType: 'password',
          textContentType: 'password',
          onChangeText: value => (passwordConfirmation.current = value),
        }}
      />
      <View style={{ padding: 30, width: 300 }}>
        <Button name="valider" onPress={submit} />
      </View>
      <Text
        style={{
          backgroundColor: '#464646',
          color: 'white',
          padding: 10,
          borderRadius: 20,
        }}
        onPress={() => navigation.navigate('SignIn')}>
        J'ai deja un compte
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 40,
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
