import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';

import { lang } from '../helpers/translations/setLanguage';
import translations from '../helpers/translations/translations';
import ForgotPassword from '../screens/AuthScreen/ForgotPassword';
import SignIn from '../screens/AuthScreen/SignIn';
import SignUp from '../screens/AuthScreen/SignUp';
import { NavigatorParam } from './NavigatorParam';
import Playlists from '../screens/AppScreen/Playlists';

const Stack = createStackNavigator<NavigatorParam>();

const AppNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(true);

  return (
    <SafeAreaView style={styles.container}>
      {/*// @ts-ignore*/}

      <NavigationContainer value={{ lang: translations[lang] }}>
        <Stack.Navigator
          screenOptions={{
            headerShown: false,
          }}>
          {isLoggedIn === false ? (
            <>
              <Stack.Screen name="SignIn" component={SignIn} />
              <Stack.Screen name="SignUp" component={SignUp} />
              <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            </>
          ) : (
            <>
              <Stack.Screen name="Playlists" component={Playlists}/>
            </>
          )}
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
