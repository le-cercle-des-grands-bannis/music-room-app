import React from 'react';
import {
  StyleSheet,
  View,
  TouchableOpacity,
  ActivityIndicator,
  StatusBar,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {splashProps} from '../../navigation/NavigatorParam';
const Splash = () => {
  const navigation = useNavigation<splashProps>(); // To remove when automatic redirection is UP

  // const dispatch = useDispatch();
  //
  // useEffect(() => {
  //   dispatch(fetchUserAction(navigation));
  // }, []);

  return (
    <View style={styles.container}>
      <ActivityIndicator style={styles.activityIndicator} />
      <TouchableOpacity // To remove when automatic redirection is UP
        style={styles.button}
        onPress={() => navigation.navigate('Auth')}
      />
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
