import React from 'react';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import { MainScreen, MainHeader } from '../../Main';

const AppNavigator = createStackNavigator({
  Main: {
    screen: MainScreen,
    navigationOptions: MainHeader
    // navigationOptions: ({ navigation }) => ({
    //   header: <MainHeader navigation={navigation} />,
    // }),
  },
  // Detail: {screen: DetailScreen},
},
{
  initialRouteName: "Main"
});

const App = createAppContainer(AppNavigator);

export default App;
