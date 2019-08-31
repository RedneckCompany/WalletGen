import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import { Metrics } from '../shared/themes';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    padding: Metrics.bigMargin,
    height: '100%',
    width: '100%',
  }
});

interface DetailScreenProps {
  readonly navigation;
}

class DetailScreen extends React.Component<DetailScreenProps> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Detail</Text>
      </View>
    );
  }
}

export default DetailScreen;