import 'react-native-gesture-handler';
import store from '@redux/store';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import AppNavigator from './src/navigation/Navigator';

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          <AppNavigator />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
