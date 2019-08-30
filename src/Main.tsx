import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TopBar from './shared/components/TopBar';
import { Fonts } from './shared/themes'
import MenuButton from './shared/components/MenuButton';

export default function Main() {
  return (
    <View style={styles.container}>
        <TopBar
          leftSection={<MenuButton />}
          centerSection={<Text numberOfLines={1} style={styles.title}>{'WalletGen'}</Text>}
        ></TopBar>
      <Text>Open up!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'column',
  },
  title: {
    ...Fonts.top(),
  }
});