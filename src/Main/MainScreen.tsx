import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Metrics, Colors, Fonts } from '../shared/themes';
import { connect } from 'react-redux';
import WideFabButton from '../shared/components/WideFabButton';
import WalletList from './components/WalletList';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: Metrics.smallMargin,
    // backgroundColor: Colors.main,
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
    const { navigation, wallets: { list } } = this.props;

    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle} numberOfLines={1}>
          Your wallets
        </Text>

        {list && !!list.length && 
          <WalletList data={list} navigation={navigation} />
        }

        <WideFabButton text={'Create Wallet'} onPress={() => navigation.navigate('Create')} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { wallets } = state;
  return { wallets };
};

export default connect(mapStateToProps)(MainScreen);
