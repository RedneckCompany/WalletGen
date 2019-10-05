import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Fonts, Colors, Metrics } from '../shared/themes'
import BackButton from '../shared/components/BackButton';


export default function CreateHeader({ navigation }) {
  return ({
    headerStyle: {
      backgroundColor: Colors.main,
    },
    headerLeft: <BackButton style={styles.icon} navigation={navigation}/>,
    headerTitle: <Text numberOfLines={1} style={styles.title}>Add Wallet</Text>,
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
