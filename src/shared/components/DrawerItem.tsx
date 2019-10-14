import React from 'react';
import { Text, TouchableOpacity, StyleSheet, ViewStyle, View } from 'react-native';
import { Colors, Fonts, Metrics } from '../themes';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',

    padding: Metrics.littleMargin,
  },
  text: {
    ...Fonts.sectionTitle(),
    flex: 1,
  },
  divider: {
    width: '100%',
    borderBottomColor: Colors.divider,
    borderBottomWidth: Metrics.border.xsmall,
  }
});

interface MoreButtonProps {
  readonly onPress?: Function,
  readonly text: string,
  readonly style?: ViewStyle,
}

function DrawerItem({ onPress = () => { }, text, style }: MoreButtonProps) {

  return (
    <>
      <TouchableOpacity
        style={[styles.container, style]}
        hitSlop={Metrics.touchable.largeHitSlop}
        onPress={onPress}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
      <View style={styles.divider}></View>
    </>
  );
}

export default DrawerItem;
