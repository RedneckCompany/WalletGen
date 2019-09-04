import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Images, Metrics } from '../themes';

function CoinIcon({ type, size = Metrics.images.medium }) {
  const imageUri = `${type}Icon`;

  return (
    <Image
      style={{ width: size, height: size }}
      source={Images[imageUri]}
    />
  );
}

CoinIcon.propTypes = {
  type: PropTypes.string.isRequired,
  size: PropTypes.number,

};

export default CoinIcon;
