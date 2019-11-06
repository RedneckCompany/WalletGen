import React, { useEffect } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Fonts, Metrics, Images } from '../shared/themes';
import BalanceBox from './components/BalanceBox';
import { fetchBalance } from '../shared/actions/walletActions';
import Transactions from './components/Transactions';
import FabButton from '../shared/components/FabButton';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: Metrics.bigMargin,
    height: '100%',
    width: '100%',
  },
  sectionTitle: {
    ...Fonts.sectionTitle(),
    margin: Metrics.bigMargin,
  },
  copyBox: {
    margin: Metrics.smallMargin,
  }
});

interface DetailScreenProps {
  readonly actions;
  readonly navigation;
  readonly wallets;
}

function DetailScreen({ actions, navigation, wallets }: DetailScreenProps) {
  const { publicKey } = navigation.state.params;
  const { balance } = wallets;

  useEffect(() => {
    const { fetchBalance } = actions;
    fetchBalance(publicKey);
  }, []);

  return (
    <>
      <BalanceBox balance={balance} publicKey={publicKey}></BalanceBox>
      <Text style={styles.sectionTitle} numberOfLines={1}>
        Transaction history
      </Text>

      {balance && balance.transactions &&
        <Transactions transactions={balance.transactions} />
      }
      <FabButton icon={Images.planeIcon} onPress={() => navigation.navigate('Create')} />
    </>
  );
}

const mapStateToProps = (state) => {
  const { wallets } = state;
  return { wallets };
};

const mapDispatchToProps = (dispatch)  => {
  return {
    actions: bindActionCreators({ fetchBalance }, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);
