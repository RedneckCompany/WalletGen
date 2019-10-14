import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Fonts, Metrics } from '../shared/themes';
import InputCopyBox from '../shared/components/InputCopyBox';
import PublicQRCode from '../tools/PublicQRCode';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: Metrics.bigMargin,
    height: '100%',
    width: '100%',
  },
  section: {
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
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
  readonly navigation;
}

function DetailScreen({ navigation }: DetailScreenProps) {
  const { publicKey, privateKey } = navigation.state.params;

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.sectionTitle} numberOfLines={1}>
        Receive payment
      </Text>

      <View style={styles.section}>
        {publicKey && 
          <InputCopyBox style={styles.copyBox} text={publicKey} />
        }
        <PublicQRCode address={publicKey} />
      </View>

      <Text style={styles.sectionTitle} numberOfLines={1}>
        Send payment
      </Text>

      <View style={styles.section}>
        {privateKey && 
          <InputCopyBox style={styles.copyBox} text={privateKey} />
        }
      </View>
    </ScrollView>
  );
}

export default DetailScreen;
