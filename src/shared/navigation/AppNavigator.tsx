import {createStackNavigator, createAppContainer, createDrawerNavigator} from 'react-navigation';
import { MainScreen, MainHeader, MainDrawer } from '../../Main';

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: MainHeader
    // navigationOptions: ({ navigation }) => ({
    //   header: <MainHeader navigation={navigation} />,
    // }),
  },
  // Detail: {screen: DetailScreen},
});

const DrawerNavigator = createDrawerNavigator(
  {
    Main: AppNavigator,
    // Detail: DetailScreen,
  },
  {
    initialRouteName: "Main",
    contentComponent: MainDrawer,
    drawerPosition: 'left',
  }
);


export default createAppContainer(DrawerNavigator);
