import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics, Colors, Fonts } from '../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: Metrics.smallMargin,
    // backgroundColor: Colors.mainBackground,
    height: '100%',
    width: '100%',
  },
  sectionTitle: {
    ...Fonts.sectionTitle(),
    margin: Metrics.bigMargin,
  }
});

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle} numberOfLines={1}>
        Your wallets
      </Text>

      <TouchableOpacity onPress={() => navigation.navigate('Detail', {name: 'First'})}>
        <Text>Navigate</Text>
      </TouchableOpacity>
    </View>
  );
}

MainScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};
