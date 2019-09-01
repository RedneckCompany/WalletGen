import React from 'react';
import { Platform, Text, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { getInset as getSafeAreaInset } from 'react-native-safe-area-view';
import { Colors, Metrics } from '../themes';

interface WideFabButtonProps {
  readonly text: string;
  readonly disabled?: boolean;
  readonly onPress: () => void;
}

interface WideFabButtonStyles {
  readonly container: ViewStyle;
  readonly text: TextStyle;
}

const initialHeightByPlatform =  Platform.select({
  android: Metrics.xxxlargeMargin,
  ios: Metrics.littleMargin + getSafeAreaInset('bottom'),
});

const styles = StyleSheet.create<WideFabButtonStyles>({
  container: {
    position: 'absolute',
    left: Metrics.xxlargeMargin,
    right: Metrics.xxlargeMargin,
    bottom: initialHeightByPlatform,
    backgroundColor: Colors.headerBackground,
    paddingVertical: Metrics.littleMargin,
    elevation: Metrics.elevation.medium,
    zIndex: Metrics.elevation.medium,
    shadowColor: Colors.darkPrimary,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: Metrics.largeMargin,
  },
  text: {
    color: Colors.primary,
    textAlign: 'center',
  }
});

export default function WideFabButton({ text, disabled = false, onPress }: WideFabButtonProps): JSX.Element {
  return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={styles.container}
      >
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
  );
}
