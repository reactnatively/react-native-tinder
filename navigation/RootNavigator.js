import React from 'react';
import { createStackNavigator } from 'react-navigation';
import createMaterialTopTabNavigator from './TabNavigator';

const RootStackNavigator = createStackNavigator(
  {
    Main: {
      screen: createMaterialTopTabNavigator,
    },
  }
);

export default class RootNavigator extends React.Component {
  render() {
    return <RootStackNavigator />;
  }
}
