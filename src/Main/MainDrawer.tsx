import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Colors, Fonts, Metrics } from '../shared/themes';
import Bitcoin from '../tools/bitcoin';

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
  },
  text: {
    ...Fonts.text(),
  }
});

export default function MainDrawer() {
  const [USD, setUSD] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const result = await new Bitcoin().convertBTC(100000000);
      //setUSD(result);
    };
    fetchData();
  }, []);
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{'WalletGen'}</Text>

      <View>
        <Text style={styles.text}>1 BTC = {USD} USD</Text>
      </View>
    </View>
  );
}