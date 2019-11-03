import React from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import { Metrics } from '../../shared/themes';


const styles = StyleSheet.create({
  section: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    padding: Metrics.smallMargin,
  },
  text: {
    marginBottom: Metrics.xlargeMargin,
  },
});

interface TransactionProps {
  value: number,
  unit: string,
}
interface TransactionsProps {
  readonly transactions: TransactionProps[];
}

function Transaction({ value, unit }: TransactionProps): JSX.Element {
  return (
    <View style={styles.section}>
      <Text style={styles.text}>
        {value} {unit}
      </Text>
    </View>
  );
}

function Transactions({ transactions }: TransactionsProps): JSX.Element {
  return (
    <FlatList
      data={transactions}
      renderItem={Transaction}
    />
  );
}

export default Transactions;
