import React, { Component } from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';
import ScreenThree from '../Screens/ScreenThree';
import ScreenFour from '../Screens/ScreenFour';
import Education from '../Screens/Education';

const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Screen One' component={ScreenOne} />
        <Tab.Screen name='Screen Two' component={ScreenTwo} />
        <Tab.Screen name='Screen Three' component={ScreenThree} />
        <Tab.Screen name='Screen Four' component={ScreenFour} />
        <Tab.Screen name='Screen Five' component={Education} />
      </Tab.Navigator>
    )
  }
}
