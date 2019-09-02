import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { Fonts, Metrics, Images, Colors } from '../shared/themes';
import WideFabButton from '../shared/components/WideFabButton';

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
  crpytoButton: {
    borderColor: Colors.main
  },
  input: {
    margin: Metrics.smallMargin,
    padding: Metrics.smallMargin,
    backgroundColor: '#FFFFFF',
    height:45,
    elevation: Metrics.elevation.medium,
    shadowColor: Colors.darkPrimary,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
  }
});

interface CreateScreenProps {
  readonly navigation;
}

interface CreateScreenState {
  id?: string,
  type?: string,
  name?: string,
  address?: {
    public: string,
    private: string,
  }
}

class CreateScreen extends React.Component<CreateScreenProps, CreateScreenState> {
  constructor(props) {
    super(props);
    this.state = {
        type: '',
        name: ''
    }
  }

  updateType(type: string) {
    this.setState({ type });
  }

  updateName(name: string) {
    this.setState({ name });
  }

  submit() {
    const { navigation } = this.props;
    const { type, name } = this.state;
    const id = `${type}-${name}`;
    this.setState({ id });
    navigation.goBack(null);
  }

  render() {
    const { type, name } = this.state;
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.sectionTitle} numberOfLines={1}>
            1 - Type
          </Text>

          <TouchableOpacity
            style={styles.crpytoButton}
            hitSlop={Metrics.touchable.largeHitSlop}
            onPress={() => this.updateType('bitcoin')}
          >
            <Image source={Images.bitcoinIcon} />
          </TouchableOpacity> 
        </View>

        {!!type &&
          <View>
            <Text style={styles.sectionTitle} numberOfLines={1}>
              2 - Choose a name
            </Text>

            <TextInput
              style={styles.input}
              defaultValue={''}
              onChangeText={(text) => this.updateName(text)}
              placeholder={'Enter name for your wallet'}
              // placeholderTextColor={Colors.main}
              // selectionColor={Colors.main}
              // underlineColorAndroid="transparent"
            />
          </View>
        }

        <WideFabButton
          text={'Submit'}
          onPress={() => this.submit()}
          disabled={(!type || !name)}
        />
      </View>
    );
  }
}

export default CreateScreen;
