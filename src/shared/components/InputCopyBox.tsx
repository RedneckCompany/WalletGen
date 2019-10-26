import React from 'react';
import { Alert, Clipboard, Platform, TouchableOpacity, Image, TextInput, StyleSheet, View, ViewStyle } from 'react-native';
import { Images, Metrics, Colors } from '../themes';


const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    padding: Platform.select({
      ios:  Metrics.tightMargin,
      android: 0,
    }),

    backgroundColor: Colors.mainLightest,
    borderColor: Colors.main,
    borderRadius: Metrics.radius.medium,
    borderWidth: Metrics.border.xsmall,
    marginHorizontal: Metrics.smallerMargin,
  },
  input: {
    color: Colors.main,
    flex: 1,
  },
});

interface Props {
  text: string;
  style?: ViewStyle;
}

class InputCopyBox extends React.Component<Props> {
  writeToClipboard = async () => {
    const { text } = this.props;
    await Clipboard.setString(text);
  };

  readFromClipboard = async () => {
    await this.writeToClipboard();

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
