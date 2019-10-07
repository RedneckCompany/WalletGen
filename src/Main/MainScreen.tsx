import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Metrics, Fonts } from '../shared/themes';
import { connect } from 'react-redux';
import WideFabButton from '../shared/components/WideFabButton';
import WalletList from './components/WalletList';
import { bindActionCreators } from 'redux';
import { fetchBalanceWalletList } from '../shared/actions/walletActions';

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
  },
  sectionText: {
    textAlign: 'center',
  }
});

interface MainScreenProps {
  readonly actions;
  readonly navigation;
  readonly wallets;
}

class MainScreen extends React.Component<MainScreenProps> {
  componentDidMount() {
    const { actions: { fetchBalanceWalletList }, wallets: { list } } = this.props;
    fetchBalanceWalletList(list);
  }

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

        {!list || !list.length && 
          <Text style={styles.sectionText}>
            You have no wallets. 
            First press add wallet to start.
          </Text>
        }

        <WideFabButton text={'Add Wallet'} onPress={() => navigation.navigate('Create')} />
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const { wallets } = state;
  return { wallets };
};

const mapDispatchToProps = (dispatch)  => {
  return {
    actions: bindActionCreators({ fetchBalanceWalletList }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
