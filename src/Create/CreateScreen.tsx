import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
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

interface CreateScreenProps {
  readonly navigation;
}

class CreateScreen extends React.Component<CreateScreenProps> {
  render() {
    const { navigation } = this.props;
    return (
      <View style={styles.container}>
        <Text>Create</Text>
      </View>
    );
  }
}

export default CreateScreen;
