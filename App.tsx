import store from '@redux/store';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';

import { lang } from './src/helpers/translations/setLanguage';
import AppNavigator from './src/navigation/Navigator';

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <AppNavigator lang={lang} />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
