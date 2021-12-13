import React from 'react';
import 'react-native-gesture-handler';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';

import AppNavigator from './navigation/Navigator';
import rootReducer from './redux/reduxReducers/rootReducer';

import {lang} from './helpers/translations/setLanguage';

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
