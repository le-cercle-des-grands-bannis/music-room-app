import 'react-native-gesture-handler';
import { NativeBaseProvider } from 'native-base';
import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import AppNavigator from './src/navigation/Navigator';
import rootReducer from './src/redux/reduxReducers/rootReducer';
import { SafeAreaProvider } from 'react-native-safe-area-context';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <NativeBaseProvider>
          {/*// @ts-ignore*/}
          <AppNavigator />
        </NativeBaseProvider>
      </Provider>
    </SafeAreaProvider>
  );
};

export default App;
