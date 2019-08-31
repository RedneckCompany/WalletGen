import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors } from '../shared/themes';

const styles = StyleSheet.create({
  container: {
    // backgroundColor: Colors.main,
    height: '100%'
  }
});

export default function MainDrawer() {
  return (
    <View style={styles.container}>
      <Text>{'WalletGen'}</Text>
    </View>
  );
}