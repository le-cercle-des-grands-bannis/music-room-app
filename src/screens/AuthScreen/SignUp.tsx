import { NavigationProp } from '@react-navigation/native';
import React, { ClassAttributes, useEffect, useRef } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TextInputProps,
  View,
} from 'react-native';

import Api from '../../Api';
import { Button } from '../../components/Button';
const TextField = (props: {
  textInputProps?: TextInputProps & ClassAttributes<TextInput>;
}) => {
  return (
    <View style={styles2.textField}>
      <TextInput
        style={{ height: 40, textAlign: 'center' }}
        {...props.textInputProps}
      />
    </View>
  );
};

const Field = (props: {
  name: string;
  textInputProps?: TextInputProps & ClassAttributes<TextInput>;
}) => {
  return (
    <View>
      <View style={{ alignItems: 'center', paddingVertical: 10 }}>
        <Text>{props.name}</Text>
      </View>
      <TextField textInputProps={props.textInputProps} />
    </View>
  );
};

export default function SignUp({
  navigation,
}: {
  navigation: NavigationProp<any>;
}) {
  const username = useRef<TextInput>();
  const email = useRef<TextInput>();
  const emailConfirmation = useRef<TextInput>();
  const password = useRef<TextInput>();
  const passwordConfirmation = useRef<TextInput>();
  const firstName = useRef<TextInput>();
  const lastName = useRef<TextInput>();

  const submit = async () => {
    try {
      const response = await new Api().auth.register({
        username: username.current?.props.value as string,
        email: email.current?.props.value as string,
        email_confirmation: emailConfirmation.current?.props.value as string,
        password: password.current?.props.value as string,
        password_confirmation: passwordConfirmation.current?.props
          .value as string,
        firstName: firstName.current?.props.value as string,
        lastName: lastName.current?.props.value as string,
      });
      console.log(response);
    } catch (e) {
      if (lastName.current) {
        // console.log(lastName.current.);
      }
    }
  };

  useEffect(() => {
    lastName.current?.focus();
  }, []);

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={{ fontSize: 30, paddingBottom: 10 }}>Inscription</Text>
      <Field
        name="Nom d'utilisation"
        textInputProps={{
          autoCompleteType: 'username',
          textContentType: 'username',
          ref: username,
        }}
      />
      <Field
        name="Email"
        textInputProps={{
          autoCompleteType: 'email',
          textContentType: 'emailAddress',
          keyboardType: 'email-address',
          ref: email,
        }}
      />
      <Field
        name="Confirmation email"
        textInputProps={{
          autoCompleteType: 'email',
          textContentType: 'emailAddress',
          ref: emailConfirmation,
        }}
      />
      <Field
        name="Mot de passe"
        textInputProps={{
          secureTextEntry: true,
          autoCompleteType: 'password',
          textContentType: 'password',
          ref: password,
        }}
      />
      <Field
        name="Confirmation mot de passe"
        textInputProps={{
          secureTextEntry: true,
          autoCompleteType: 'password',
          textContentType: 'password',
          ref: passwordConfirmation,
        }}
      />
      <Field
        name="Prénom"
        textInputProps={{
          textContentType: 'name',
          ref: firstName,
        }}
      />
      <Field
        name="Nom"
        textInputProps={{
          textContentType: 'familyName',
          ref: lastName,
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
