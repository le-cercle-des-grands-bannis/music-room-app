import { NavigationProp } from '@react-navigation/native';
import React, { useRef } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

import Api from '../../Api';
import { Button } from '../../components/Button';
import Field from './Field';

export default function SignUp({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const username = useRef<string>('');
  const email = useRef<string>('');
  const emailConfirmation = useRef<string>('');
  const password = useRef<string>('');
  const passwordConfirmation = useRef<string>('');
  const firstName = useRef<string>('');
  const lastName = useRef<string>('');

  const submit = async () => {
    try {
      const response = await new Api().auth.register({
        username: username.current,
        email: email.current,
        email_confirmation: emailConfirmation.current,
        password: password.current,
        password_confirmation: passwordConfirmation.current,
        firstName: firstName.current,
        lastName: lastName.current,
      });
      console.log(response);
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
      <Field
        name="Prénom"
        textInputProps={{
          textContentType: 'name',
          onChangeText: value => (firstName.current = value),
        }}
      />
      <Field
        name="Nom"
        textInputProps={{
          textContentType: 'familyName',
          onChangeText: value => (lastName.current = value),
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
