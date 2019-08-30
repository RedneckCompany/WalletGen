import React from 'react';
import PropTypes from 'prop-types';
import { Image, TouchableOpacity } from 'react-native';
// import { withNavigation } from 'react-navigation';
// import SceneKeys from '../navigation/SceneKeys';
import { Images, Metrics } from '../themes';

function MenuButton({ navigation }) {
  return (
    <TouchableOpacity
      hitSlop={Metrics.touchable.largeHitSlop}
      // onPress={() => navigation.navigate(SceneKeys.drawerOpen)}
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

// export default withNavigation(MenuButton);
export default MenuButton;