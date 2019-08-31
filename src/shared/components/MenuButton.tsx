import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
import { Images, Metrics } from '../themes';

function MenuButton({ navigation }) {
  return (
    <TouchableOpacity
      hitSlop={Metrics.touchable.largeHitSlop}
      onPress={navigation.openDrawer}
    >
      <Image source={Images.menuIcon} />
    </TouchableOpacity>
  );
}

MenuButton.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func.isRequired,
  }).isRequired,
};

export default MenuButton;
