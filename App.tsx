// import { StatusBar } from 'expo-status-bar';
// import { SafeAreaProvider } from 'react-native-safe-area-context';
//
// import useCachedResources from './src/hooks/useCachedResources';
// import useColorScheme from './src/hooks/useColorScheme';
// import Navigation from './src/navigation';
//
// export default function App() {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();
//
//   if (!isLoadingComplete) {
//     return null;
//   } else {
//     return (
//       <SafeAreaProvider>
//         <Navigation colorScheme={colorScheme} />
//         <StatusBar />
//       </SafeAreaProvider>
//     );
//   }
// }

import React from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AppNavigator from './src/navigation/Navigator';
import rootReducer from './src/redux/reduxReducers/rootReducer';

import {lang} from './src/helpers/translations/setLanguage';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      {/*// @ts-ignore*/}
      <AppNavigator lang={lang} />
    </Provider>
  );
};

export default App;
