import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Store, { configurePersistStore } from './Store';
import AppNavigator from './components/Navigator';

const persistor = configurePersistStore;

const AppContainer = () => (
  <Provider store={Store}>
      <PersistGate
      persistor={persistor}>
        <AppNavigator />
      </PersistGate>
  </Provider>);

export default AppContainer;