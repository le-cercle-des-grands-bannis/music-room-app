import { resetPassword } from '@redux/auth/auth.slice';
import React, { useRef } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { Button } from '../../components/Button';
import { useAppDispatch } from '../../hooks/redux';
import Field from './Field';

export default function ForgotPassword() {
  const dispatch = useAppDispatch();
  const email = useRef<string>('');

  const submit = async () => {
    try {
      dispatch(resetPassword({ email: email.current }));
    } catch (e) {
      console.error(e.response?.data);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, marginBottom: 20 }}>
        Mot de passe oublié
      </Text>
      <Field
        name="Email"
        textInputProps={{ onChangeText: value => (email.current = value) }}
      />
      <View style={{ marginTop: 30, marginVertical: 20, width: 200 }}>
        <Button name="Réinitialiser mot de passe" onPress={submit} />
      </View>
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
