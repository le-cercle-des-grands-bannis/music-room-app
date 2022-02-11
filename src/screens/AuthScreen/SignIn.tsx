import {View, TextInput, Text, StyleSheet} from 'react-native';
import React from 'react';
import {Button} from '../../components/Button';

const TextField = (props: {secureTextEntry?: boolean}) => {
  return (
    <View style={styles2.textField}>
      <TextInput
        style={{height: 40, textAlign: 'center'}}
        secureTextEntry={props.secureTextEntry}
      />
    </View>
  );
};

const Field = (props: {
  name: string;
  textInputPros?: {secureTextEntry?: boolean};
}) => {
  return (
    <View>
      <View style={{alignItems: 'center', paddingVertical: 10}}>
        <Text>{props.name}</Text>
      </View>
      <TextField secureTextEntry={props?.textInputPros?.secureTextEntry} />
    </View>
  );
};

export default function SignIn({navigation}) {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30, paddingBottom: 40}}>Connexion</Text>
      <Field name={'Email'} />
      <Field name={'Mot de passe'} textInputPros={{secureTextEntry: true}} />
      <View style={{padding: 30, width: 300}}>
        <Button name={'valider'} onPress={() => console.log('test')} />
      </View>
      <Text
        style={{
          backgroundColor: '#464646',
          color: 'white',
          padding: 10,
          borderRadius: 20,
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
    flexShrink: 1,
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
