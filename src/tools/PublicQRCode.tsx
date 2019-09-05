import React from 'react';
import PropTypes from 'prop-types';
import { Image } from 'react-native';
import { Metrics } from '../shared/themes';
import Bitcoin from './bitcoin';

function PublicQRCode({ address, size = Metrics.images.full }) {
  const uri = new Bitcoin().getQRCode(address);
  return (
    <Image style={{ width: size, height: size }} source={{ uri }} />
  );
}

PublicQRCode.propTypes = {
  address: PropTypes.string.isRequired,
  size: PropTypes.number,
};

export default PublicQRCode;
