import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MainScreen() {
  return (
    <View style={styles.container}>
      <Text style={{ fontWeight: 'bold', marginTop: 20 }}>Home</Text>
      <Text>Open up!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // height: '100%',
    // width: '100%',
    // flexDirection: 'column',
  }
});
