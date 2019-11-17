import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Metrics } from '../shared/themes';
import { getAll } from '../tools/currencies';

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.main,
    flex: 1,
    flexDirection: 'column',
    padding: Metrics.bigMargin,
    height: '100%',
    width: '100%',
  },
  title: {
    ...Fonts.header(),
    marginBottom: Metrics.bigMargin,
  },
  text: {
    ...Fonts.text(),
  }
});

export default function MainDrawer() {
  const [currencies, setCurrencies] = useState([]);
  useEffect(() => {
    async function getCurrencies() {
      setCurrencies(await getAll());
    }
    getCurrencies();
  }, [currencies]);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'WalletGen'}</Text>

      <View>
        {!!currencies.length && currencies.map((currency) => (
          <Text key={currency.id} style={styles.text}>
            {currency.symbol} = {currency.price_usd} USD
          </Text>
        ))}
      </View>
    </View>
  );
}