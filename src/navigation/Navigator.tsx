import {NavigationContainer} from '@react-navigation/native';
import Auth from '../screens/AuthScreen/Auth';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigatorParam} from './NavigatorParam';
import Splash from '../screens/AuthScreen/Splash';
import translations from '../helpers/translations/translations';
import {lang} from '../helpers/translations/setLanguage';

const Stack = createStackNavigator<NavigatorParam>();

const AppNavigator = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/*// @ts-ignore*/}

      <NavigationContainer value={{lang: translations[lang]}}>
        <Stack.Navigator
          initialRouteName="Splash"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Auth" component={Auth} />
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
