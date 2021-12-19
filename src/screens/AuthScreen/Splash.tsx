import React, {useEffect} from 'react';
import {StyleSheet, View, ActivityIndicator, StatusBar} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {splashProps} from '../../navigation/NavigatorParam';
import {fetchUserAction} from '../../redux/reduxActions/auth';
import {useDispatch} from 'react-redux';
const Splash = () => {
  const navigation = useNavigation<splashProps>(); // To remove when automatic redirection is UP

  const dispatch = useDispatch();

  useEffect(() => {
    // @ts-ignore
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
