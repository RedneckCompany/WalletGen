import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Images, Metrics } from '../themes';

function BackButton({ navigation, style }) {
  return (
    <TouchableOpacity
      style={style}
      hitSlop={Metrics.touchable.largeHitSlop}
      onPress={() => navigation.goBack(null)}
    >
      <Image source={Images.backIcon} />
    </TouchableOpacity>
  );
}

BackButton.propTypes = {
  style: PropTypes.any,
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default BackButton;
