import React from 'react';
import { TabNavigator } from 'react-navigation';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Matches from '../screens/Matches';

export default TabNavigator(
  {
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Profile',
      },
    },
    Home: {
      screen: Home,
      navigationOptions: {
        tabBarLabel: 'Home',
      }
    },
    Matches: {
      screen: Matches,
      navigationOptions: {
        tabBarLabel: 'Matches',
      },
    },
  },
  {
    navigationOptions: {
      header: null
    },
    tabBarPosition: 'top',
    initialRouteName: 'Home',
    animationEnabled: true,
    swipeEnabled: true,
    tabBarOptions: {
      style: {
        height: 100,
        backgroundColor: '#fff',
      },
    }
  }
);
