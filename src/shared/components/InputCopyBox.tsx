import React from 'react';
import { Alert, Clipboard, TouchableOpacity, Image, TextInput, StyleSheet, View } from 'react-native';
import { Images, Metrics, Colors } from '../themes';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    // flexWrap: 'wrap',
    width: '100%',

    padding: Metrics.tightMargin,

    backgroundColor: Colors.hexToRGBA(Colors.mainLighter, 0.1),
    borderColor: Colors.mainLighter,
    borderRadius: Metrics.radius.small,
    borderWidth: Metrics.border.xxsmall,
  },
  input: {
    color: Colors.disabledText,
  },
  icon: {
    margin: Metrics.tightMargin,
  },
});

interface Props {
  text: string;
  style?: any;
}

class InputCopyBox extends React.Component<Props> {
  componentDidMount () {
    this.writeToClipboard();
  }

  writeToClipboard = async () => {
    const { text } = this.props;
    await Clipboard.setString(text);
  };

  readFromClipboard = async () => {
    const content = await Clipboard.getString();   
    setTimeout(() => {
      Alert.alert(`copied: ${content}`);
    }, 100);
  };

  render() {
    const { style, text } = this.props;
    return (
      <View style={[styles.container, style]}>
          <TextInput
            style={styles.input}
            value={text}
            editable={false}
            // underlineColorAndroid="transparent"
          />

        <TouchableOpacity onPress={this.readFromClipboard}>
          <Image
            style={styles.icon}
            source={Images.copyIcon}
          />
        </TouchableOpacity>
      </View>
    );
  }
}


export default InputCopyBox;
