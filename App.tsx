import React from 'react';
import { Provider } from 'react-redux';
import AppNavigator from './src/shared/navigation/AppNavigator';
import configureStore from './src/shared/configureStore';
import { PersistGate } from 'redux-persist/integration/react';

export default function App() {
  const { store, persistor } = configureStore();
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
}
