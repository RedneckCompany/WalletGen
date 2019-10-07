import React from 'react';
import PropTypes from 'prop-types';
import { Platform, FlatList, TouchableOpacity, Text, StyleSheet, View } from 'react-native';
import { getInset as getSafeAreaInset } from 'react-native-safe-area-view';
import { Fonts, Metrics, Colors } from '../../shared/themes';
import CoinIcon from '../../shared/components/CoinIcon';

const initialHeightByPlatform =  Platform.select({
  android: Metrics.xxxlargeMargin,
  ios: getSafeAreaInset('bottom'),
});

const styles = StyleSheet.create({
  listContainer: {
    backgroundColor: Colors.primary,
    marginBottom: initialHeightByPlatform,
  },
  itemContainer: {
    backgroundColor: Colors.main,
    margin: Metrics.smallerMargin,
    padding: Metrics.smallMargin,
    borderRadius: Metrics.radius.small,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginBottom: 2,
  },
  name: {
    ...Fonts.text(),
    marginRight: Metrics.smallMargin,
  },
  subName: {
    color: Colors.secondary,
  },
  content: {
    flex: 1,
    paddingLeft: Metrics.smallMargin,
    marginRight: 0,
    flexDirection: 'column',
    justifyContent: 'center',
  },
});

function WalletList({ data, navigation }) {
  const { navigate } = navigation;

  return (
    <FlatList
      style={styles.listContainer}
      data={data}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => navigate('Detail', { 
            id: item.id,
            name: item.name,
            publicKey: item.address.publicKey,
            privateKey: item.address.privateKey,
          })}
        >
          <CoinIcon type={item.type} />

          <View style={styles.content}>
            <View style={styles.row}>
              <Text style={styles.name}>{item.name}</Text>
            </View>
            <View style={styles.row}>
              <Text style={styles.subName}>{item.type}</Text>
            </View>
          </View>

          {item.balance && item.unit &&
            <Text style={styles.name}>{`${item.balance} ${item.unit}`}</Text>
          }
        </TouchableOpacity>
      )}
    />
  );
}

WalletList.propTypes = {
  data: PropTypes.array.isRequired,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,

};

export default WalletList;
