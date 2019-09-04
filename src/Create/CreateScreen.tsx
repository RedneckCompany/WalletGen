import React from 'react';
import { Image, StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Fonts, Metrics, Images, Colors } from '../shared/themes';
import WideFabButton from '../shared/components/WideFabButton';
import Bitcoin from '../tools/bitcoin';
import { addWallet } from '../shared/actions/walletActions';

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
  readonly actions;
}

interface CreateScreenState {
  id?: string,
  type?: string,
  name?: string,
  address?: {
    publicKey: string,
    privateKey: string,
  }
}

class CreateScreen extends React.Component<CreateScreenProps, CreateScreenState> {
  constructor(props: CreateScreenProps) {
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

  save = async () => {
    const { actions: { addWallet }, navigation } = this.props;
    const { type, name } = this.state;
    const id = `${type}-${name}`;
    const address = new Bitcoin().generateNewAddress();

    this.setState({ id, address });

    try {
      await addWallet({ id, type, name, address });
      navigation.goBack(null);
    } catch (e) { 
      console.log('err', e);
    }
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
          onPress={this.save}
          disabled={(!type || !name)}
        />
      </View>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators({ addWallet }, dispatch),
  };
}

export default connect(null, mapDispatchToProps)(CreateScreen);
