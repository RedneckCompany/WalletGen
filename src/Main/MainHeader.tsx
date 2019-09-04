import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts, Colors, Metrics } from '../shared/themes'
import MenuButton from '../shared/components/MenuButton';


export default function MainHeader({ navigation }) {
  return ({
    headerStyle: {
      backgroundColor: Colors.main,
    },
    headerLeft: <MenuButton style={styles.icon} navigation={navigation}/>,
    headerTitle: <Text numberOfLines={1} style={styles.title}>{'WalletGen'}</Text>,
  });
}

const styles = StyleSheet.create({
  icon: {
    padding: Metrics.smallMargin,
  },
  title: {
    ...Fonts.header(),
  }
});
