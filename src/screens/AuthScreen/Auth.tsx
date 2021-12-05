import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {authProp} from '../../navigation/NavigatorParam';

const Auth = () => {
  const navigation = useNavigation<authProp>();

  return (
    <View style={styles.container}>
      <Text>Auth</Text>
      <TouchableOpacity // To remove when automatic redirection is UP
        style={styles.button}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
};

export default Auth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    alignContent: 'center',
    justifyContent: 'center',
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
