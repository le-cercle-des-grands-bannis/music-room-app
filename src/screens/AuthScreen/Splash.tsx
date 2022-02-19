import { useNavigation } from '@react-navigation/native';
import { fetchUserAction } from '@redux/reduxActions/auth';
import React, { useEffect } from 'react';
import { StyleSheet, View, ActivityIndicator, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';

import { signUpProps } from '../../navigation/NavigatorParam';

const Splash = () => {
  const navigation = useNavigation<signUpProps>(); // To remove when automatic redirection is UP

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUserAction(navigation));
  }, [dispatch, navigation]);

  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.activityIndicator} />
      <StatusBar barStyle="default" />
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  activityIndicator: {
    padding: 30,
  },
  button: {
    width: 100,
    height: 100,
    backgroundColor: 'red',
  },
});
