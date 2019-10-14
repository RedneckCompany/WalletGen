import React from 'react';
import { Image, TouchableOpacity, ViewStyle } from 'react-native';
import { Images, Metrics } from '../themes';

interface MoreButtonProps {
  readonly onPress?: Function,
  readonly style: ViewStyle,
}

function MoreButton({ onPress = () => { }, style }: MoreButtonProps) {

  return (
    <TouchableOpacity
      style={style}
      hitSlop={Metrics.touchable.largeHitSlop}
      onPress={onPress}
    >
      <Image source={Images.moreIcon} />
    </TouchableOpacity>
  );
}

export default MoreButton;
