import React from 'react';
import { createAppContainer } from 'react-navigation';
import AppNavigator from './src/shared/navigation/AppNavigator';

export default function App() {
  const AppContainer = createAppContainer(AppNavigator);
  return <AppContainer />;
}
