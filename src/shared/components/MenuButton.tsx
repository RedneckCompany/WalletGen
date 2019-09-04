import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Images, Metrics } from '../themes';

function MenuButton({ navigation, style }) {
  return (
    <TouchableOpacity
      style={style}
      hitSlop={Metrics.touchable.largeHitSlop}
      onPress={navigation.openDrawer}
    >
      <Image source={Images.menuIcon} />
    </TouchableOpacity>
  );
}

MenuButton.propTypes = {
  style: PropTypes.any,
  navigation: PropTypes.shape({
    openDrawer: PropTypes.func.isRequired,
  }).isRequired,
};

export default MenuButton;
