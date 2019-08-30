import React from 'react';
import { StyleSheet, StatusBar, SafeAreaView } from 'react-native';
import Main from "./src/Main";
import { Colors } from './src/shared/themes';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated
        backgroundColor={Colors.wood}
        barStyle={'light-content'}
        translucent
      />
      <Main></Main>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});