import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import { MainScreen, MainHeader, MainDrawer } from '../../Main';
import { DetailScreen, DetailHeader } from '../../Detail'

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: MainHeader
    // navigationOptions: ({ navigation }) => ({
    //   header: <MainHeader navigation={navigation} />,
    // }),
  },
  Detail: {
    screen: DetailScreen,
    navigationOptions: DetailHeader
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
