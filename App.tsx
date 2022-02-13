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

import { NativeBaseProvider } from 'native-base';
import React from 'react';
import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { lang } from './src/helpers/translations/setLanguage';
import AppNavigator from './src/navigation/Navigator';
import rootReducer from './src/redux/reduxReducers/rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        {/*// @ts-ignore*/}
        <AppNavigator lang={lang} />
      </NativeBaseProvider>
    </Provider>
  );
};

export default App;
