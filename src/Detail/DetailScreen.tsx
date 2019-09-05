import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Fonts, Metrics } from '../shared/themes';
import InputCopyBox from '../shared/components/InputCopyBox';

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
});

interface DetailScreenProps {
  readonly navigation;
}

class DetailScreen extends React.Component<DetailScreenProps> {
  render() {
    const { navigation } = this.props;
    const { name, publicKey } = navigation.state.params;

    return (
      <View style={styles.container}>
        <Text style={styles.sectionTitle} numberOfLines={1}>
          Receive payment
        </Text>
        <View>
          {publicKey && <InputCopyBox text={publicKey} />}
          <Text>public: { name }</Text>
          <Text>asd: { publicKey }</Text>
        </View>
      </View>
    );
  }
}

export default DetailScreen;
