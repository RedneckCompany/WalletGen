import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics, Colors, Fonts } from '../shared/themes';
import { connect } from 'react-redux';

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

interface MainScreenProps {
  readonly navigation;
  readonly wallets;
}

class MainScreen extends React.Component<MainScreenProps> {
  render() {
    const { navigation: { navigate }, wallets } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle} numberOfLines={1}>
          Your wallets
        </Text>
  
        <TouchableOpacity onPress={() => navigate('Detail', {name: 'First'})}>
          <Text>Navigateasdasd</Text>
        </TouchableOpacity>

        {wallets.list && wallets.list.map((wallet) => (
          <TouchableOpacity onPress={() => navigate('Detail', {name: 'First'})}>
            <Text>Navigate: {wallet}</Text>
          </TouchableOpacity>) 
        )}
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { wallets } = state;
  return { wallets };
};

export default connect(mapStateToProps)(MainScreen);
