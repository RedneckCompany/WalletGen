import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet } from 'react-native';
import { Colors, Fonts, Metrics } from '../../shared/themes';
import PublicQRCode from '../../tools/PublicQRCode';


const styles = StyleSheet.create({
  container: {
    margin: Metrics.smallerMargin,
    padding: Metrics.bigMargin,
    backgroundColor: Colors.main,
    borderColor: Colors.main,
    borderRadius: Metrics.radius.medium,
    borderWidth: Metrics.border.xsmall,
    marginHorizontal: Metrics.smallerMargin,

    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  text: {
    ...Fonts.text(),
    fontSize: 30,
  }
});

interface BalanceBoxProps {
  readonly balance: { value: number, unit: string };
  readonly publicKey: string;
}

function BalanceBox({ balance, publicKey }: BalanceBoxProps) {
  return (
    <View style={styles.container}>
        <View style={styles.content}>
          {balance && <Text style={styles.text}>{balance.value} {balance.unit}</Text>}
        </View>

      <TouchableOpacity>
        {publicKey && <PublicQRCode address={publicKey} size={Metrics.images.medium} />}
      </TouchableOpacity>
    </View> 
  );
}

export default BalanceBox;
