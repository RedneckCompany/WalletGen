import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import { ApplicationStyles, Colors, Metrics } from '../themes';

const styles = StyleSheet.create({
  container: {
    height: Metrics.navBarHeight + Metrics.statusBarHeight,
    justifyContent: 'flex-end',
  },
  content: {
    height: Metrics.navBarHeight,
    alignItems: 'center',
    flexDirection: 'row',
    marginHorizontal: Metrics.smallMargin,
  },
  leftSection: {
    alignItems: 'flex-start',
    paddingLeft: Metrics.smallMargin,
  },
  centerSection: {
    alignItems: 'flex-start',
    flex: 1,
    marginHorizontal: Metrics.smallMargin,
  },
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
    alignSelf: 'center',
  },
});

export default function TopBar({ leftSection, leftSectionStyle, centerSection, centerSectionStyle, rightSection, rightSectionStyle, color, noElevation }) {
  const rightSectionFlex = centerSection ? 0 : 1;
  return (
    <View style={[styles.container, noElevation ? ApplicationStyles.navBarWithoutElevation : ApplicationStyles.navBar, { backgroundColor: color }]}>
      <View style={styles.content}>
        {leftSection &&
          <View style={[styles.leftSection, leftSectionStyle]}>
            {leftSection}
          </View>
        }
        {centerSection &&
          <View style={[styles.centerSection, centerSectionStyle]}>
            {centerSection}
          </View>
        }
        {rightSection &&
          <View style={[styles.rightSection, { flex: rightSectionFlex }, rightSectionStyle]}>
            {rightSection}
          </View>
        }
      </View>
    </View>
  );
}

TopBar.propTypes = {
  centerSection: PropTypes.node,
  centerSectionStyle: ViewPropTypes.style,
  color: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  noElevation: PropTypes.bool,
  leftSection: PropTypes.node,
  leftSectionStyle: ViewPropTypes.style,
  rightSection: PropTypes.node,
  rightSectionStyle: ViewPropTypes.style,
};

TopBar.defaultProps = {
  color: Colors.wood,
};
