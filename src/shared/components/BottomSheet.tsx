import React, { useRef, useState, useEffect } from 'react';
import {
  Modal,
  StyleSheet,
  View,
  Animated,
  ViewStyle,
  Dimensions,
  Text,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import { Colors, Metrics, Fonts } from '../themes';

interface BottomSheetProps {
  readonly title: string;
  readonly visible: boolean;
  readonly onClose: () => void;
  readonly content: JSX.Element;
  readonly popupHeight?: number;
};

interface BottomSheetStyle {
  readonly overlay: ViewStyle;
  readonly header: ViewStyle;
  readonly cover: ViewStyle;
  readonly sheet: ViewStyle;
  readonly popup: ViewStyle;
  readonly content: ViewStyle;
  readonly title: TextStyle;
}

const styles = StyleSheet.create<BottomSheetStyle>({
  overlay: {
    justifyContent: 'center',
    backgroundColor: Colors.overlay,
  },
  header: {
    backgroundColor: Colors.primary,
    paddingVertical: Metrics.largeMargin,
    paddingHorizontal: Metrics.regularMargin,
    flexDirection: 'row',
    alignItems: 'center',
    zIndex: Metrics.elevation.large,
    borderTopRightRadius: Metrics.regularMargin,
    borderTopLeftRadius: Metrics.regularMargin,
  },
  title: {
    ...Fonts.sectionTitle(),
    marginLeft: Metrics.regularMargin,
  },
  cover: {
    backgroundColor: Colors.overlay,
    zIndex: Metrics.elevation.xlarge,
  },
  sheet: {
    position: 'absolute',
    top: Dimensions.get('window').height,
    left: 0,
    right: 0,
    padding: 0,
    height: '100%',
    justifyContent: 'flex-end',
  },
  popup: {
    backgroundColor: Colors.primary,
    borderTopRightRadius: Metrics.regularMargin,
    borderTopLeftRadius: Metrics.regularMargin,
  },
  content: {
    flex: 1,
    zIndex: Metrics.elevation.medium,
  },
});

const screenHeight: number = Dimensions.get('window').height;

export default function BottomSheet({
  title,
  onClose,
  visible,
  content,
  popupHeight = screenHeight - Metrics.xxxlargeMargin,
}: BottomSheetProps): JSX.Element {
  const [dismiss, setDismiss] = useState(false);
  const animation = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(animation, {
      toValue: 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
    return () => {
      setDismiss(true)
    }
  }, [])

  const handleOnClose = () => {
    Animated.timing(animation, {
      toValue: 0,
      duration: 200,
      useNativeDriver: true,
    }).start();

    setTimeout(() => {
      setDismiss(false)
      onClose()
    }, 200);
  }

  return (
    <Modal
      onRequestClose={handleOnClose}
      transparent={true}
      visible={visible}
      animationType={'fade'}
      hardwareAccelerated
    >
      <View style={{ ...styles.overlay, height: screenHeight }}>
        <View style={[styles.sheet]}>
          <Animated.View
            style={{
              ...styles.popup,
              minHeight: popupHeight,
              transform: [
                {
                  translateY: animation.interpolate({
                    inputRange: [0.01, 1],
                    outputRange: dismiss ? [-1 * screenHeight, 0] : [0, -1 * screenHeight],
                    extrapolate: 'clamp',
                  }),
                },
              ],
            }}
          >
            <View style={styles.header}>
              <TouchableOpacity
                hitSlop={Metrics.touchable.largeHitSlop}
                onPress={handleOnClose}
              >
                <Text>X</Text>
              </TouchableOpacity>

              <Text style={styles.title}>{title}</Text>
            </View>

            <View style={styles.content}>
              {content}
            </View>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}
