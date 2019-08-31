import Metrics from './Metrics';
import Colors from './Colors';

const ApplicationStyles = {
  defaultBackground: {
    backgroundColor: Colors.primary,
  },
  navBar: {
    elevation: Metrics.elevation.large,
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 1 },
  },
  navBarWithoutElevation: {
    elevation: 0,
    shadowOpacity: 0,
    borderBottomWidth: 0,
    shadowColor: Colors.transparent,
  },
  shadow: {
    basic: {
      elevation: Metrics.elevation.large,
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: 1 },
      shadowColor: Colors.mainBackground,
    },
    top: {
      elevation: Metrics.elevation.top,
      shadowOpacity: 0.3,
      shadowOffset: { width: 0, height: -1 },
      shadowColor: Colors.mainBackground,
    },
  },
  separator: {
    height: Metrics.border.xxsmall,
    backgroundColor: Colors.divider,
  },
};

export default ApplicationStyles;
