import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { lang } from '../helpers/translations/setLanguage';
import translations from '../helpers/translations/translations';
import ForgotPassword from '../screens/AuthScreen/ForgotPassword';
import SignIn from '../screens/AuthScreen/SignIn';
import SignUp from '../screens/AuthScreen/SignUp';
import { NavigatorParam } from './NavigatorParam';

const Stack = createStackNavigator<NavigatorParam>();

const AppNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*// @ts-ignore*/}

      <NavigationContainer value={{ lang: translations[lang] }}>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="SignIn" component={SignIn} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
