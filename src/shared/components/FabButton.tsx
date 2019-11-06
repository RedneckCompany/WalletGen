import React from 'react';
import { Platform, Image, StyleSheet, TouchableOpacity, ViewStyle, TextStyle } from 'react-native';
import { getInset as getSafeAreaInset } from 'react-native-safe-area-view';
import { Colors, Metrics } from '../themes';

interface FabButtonProps {
  readonly icon: string;
  readonly disabled?: boolean;
  readonly onPress: () => void;
}

interface FabButtonStyles {
  readonly container: ViewStyle;
  readonly active: ViewStyle;
  readonly disabled: ViewStyle;
  readonly text: TextStyle;
}

const initialHeightByPlatform =  Platform.select({
  android: Metrics.xxlargeMargin,
  ios: Metrics.littleMargin + getSafeAreaInset('bottom'),
});

const styles = StyleSheet.create<FabButtonStyles>({
  container: {
    position: 'absolute',
    right: Metrics.xlargeMargin,
    bottom: initialHeightByPlatform,
    padding: Metrics.littleMargin,
    elevation: Metrics.elevation.medium,
    zIndex: Metrics.elevation.medium,
    shadowColor: Colors.darkPrimary,
    shadowOpacity: 0.3,
    shadowRadius: 2,
    shadowOffset: { width: 0, height: 2 },
    borderRadius: Metrics.radius.circle,
  },
  active: {
    backgroundColor: Colors.main,
  },
  disabled: {
    backgroundColor: Colors.disabled
  },
  text: {
    color: Colors.primary,
    textAlign: 'center',
  }
});

export default function FabButton({ icon, disabled = false, onPress }: FabButtonProps): JSX.Element {
  return (
      <TouchableOpacity
        disabled={disabled}
        onPress={onPress}
        style={[styles.container, disabled ? styles.disabled : styles.active]}
      >
        <Image source={icon} />
      </TouchableOpacity>
  );
}
