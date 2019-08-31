import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts, Colors } from '../shared/themes'
import MenuButton from '../shared/components/MenuButton';


export default function MainHeader() {
  return ({
    headerStyle: {
      backgroundColor: Colors.wood,
    },
    headerLeft: <MenuButton />,
    headerTitle: <Text numberOfLines={1} style={styles.title}>{'WalletGen'}</Text>,
  });
}

const styles = StyleSheet.create({
  title: {
    ...Fonts.top(),
  }
});
