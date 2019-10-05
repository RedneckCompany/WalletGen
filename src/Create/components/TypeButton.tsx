import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, StyleSheet } from 'react-native';
import { Colors, Metrics } from '../../shared/themes';
import CoinIcon from '../../shared/components/CoinIcon';


const styles = StyleSheet.create({
  container: {
    borderColor: Colors.main,
    borderRadius: Metrics.radius.medium,
    borderWidth: Metrics.border.xsmall,
    marginHorizontal: Metrics.smallerMargin,
  }
});

function TypeButton({ type, onPress }) {

  return (
    <TouchableOpacity
      style={styles.container}
      hitSlop={Metrics.touchable.largeHitSlop}
      onPress={onPress}
    >
      <CoinIcon type={type} />
    </TouchableOpacity> 
  );
}

TypeButton.propTypes = {
  type: PropTypes.string.isRequired,
  onPress: PropTypes.any,

};

export default TypeButton;
