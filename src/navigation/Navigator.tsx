import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { selectAuth } from '@redux/auth/auth.slice';
import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import NotificationStack from '../components/Notification/NotificationStack';
import { lang } from '../helpers/translations/setLanguage';
import translations from '../helpers/translations/translations';
import { useAppSelector } from '../hooks/redux';
import ForgotPassword from '../screens/AuthScreen/ForgotPassword';
import SignIn from '../screens/AuthScreen/SignIn';
import SignUp from '../screens/AuthScreen/SignUp/SignUp';
import Test from '../screens/Test';
import { NavigatorParam } from './NavigatorParam';

const Stack = createStackNavigator<NavigatorParam>();

const AppNavigator = () => {
  const { isLoggedIn } = useAppSelector(selectAuth);

  return (
    <SafeAreaView style={styles.container}>
      {/*// @ts-ignore*/}

      <NavigationContainer value={{ lang: translations[lang] }}>
        <Stack.Navigator
          initialRouteName="SignIn"
          screenOptions={{
            headerShown: false,
          }}>
          {!isLoggedIn ? (
            <>
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </>
          ) : (
            <>
              <Stack.Screen name="Test" component={Test} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      <NotificationStack />
    </SafeAreaView>
  );
};

export default AppNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
