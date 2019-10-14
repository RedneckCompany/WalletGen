import {createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { MainScreen, MainHeader, MainDrawer } from '../../Main';
import { DetailScreen, DetailHeader } from '../../Detail';
import { CreateScreen, CreateHeader } from '../../Create';
import DetailRightDrawer from '../../Detail/DetailRightDrawer';

const DetailNavigator = createDrawerNavigator(
  {
    Detail: DetailScreen,
  },
  {
    initialRouteName: "Detail",
    contentComponent: DetailRightDrawer,
    drawerPosition: 'right',
  }
);

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: MainHeader
  },
  Detail: {
    screen: DetailNavigator,
    navigationOptions: DetailHeader,
  },
  Create: {
    screen: CreateScreen,
    navigationOptions: CreateHeader
  },
});

const RootNavigator = createDrawerNavigator(
  {
    Main: AppNavigator,
  },
  {
    initialRouteName: "Main",
    contentComponent: MainDrawer,
    drawerPosition: 'left',
  }
);


export default createAppContainer(RootNavigator);
