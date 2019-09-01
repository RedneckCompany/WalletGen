import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import { MainScreen, MainHeader, MainDrawer } from '../../Main';
import { DetailScreen, DetailHeader } from '../../Detail';
import { CreateScreen, CreateHeader } from '../../Create';

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: MainHeader
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: DetailHeader
  },
  Create: {
    screen: CreateScreen,
    navigationOptions: CreateHeader
  },
});

const DrawerNavigator = createDrawerNavigator(
  {
    Main: AppNavigator,
  },
  {
    initialRouteName: "Main",
    contentComponent: MainDrawer,
    drawerPosition: 'left',
  }
);


export default createAppContainer(DrawerNavigator);
