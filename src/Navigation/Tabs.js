import React, { Component } from 'react'
import { View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenOne from '../Screens/ScreenOne';
import ScreenTwo from '../Screens/ScreenTwo';
import ScreenThree from '../Screens/ScreenThree';
import ScreenFour from '../Screens/ScreenFour';
import Education from '../Screens/Education';
import { Image } from 'react-native';

const Tab = createBottomTabNavigator();

export default class Tabs extends Component {
  render() {
    return (
      <Tab.Navigator>
        <Tab.Screen name='Screen One' component={ScreenOne} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: focused ? '#dce2ed' : 'transparent',
              borderRadius: 5,
            }}>
              <Image 
              source={require('../images/home.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#2a52be' : '#000',
                margin: 10,
              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name='Screen Two' component={ScreenTwo} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: focused ? '#dce2ed' : 'transparent',
              borderRadius: 5,
            }}>
              <Image 
              source={require('../images/hexagon.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#2a52be' : '#000',
                margin: 10,
              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name='Screen Three' component={ScreenThree} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: focused ? '#dce2ed' : 'transparent',
              borderRadius: 5,
            }}>
              <Image 
              source={require('../images/box.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#2a52be' : '#000',
                margin: 10,
              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name='Screen Four' component={ScreenFour} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: focused ? '#dce2ed' : 'transparent',
              borderRadius: 5,
            }}>
              <Image 
              source={require('../images/heart.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#2a52be' : '#000',
                margin: 10,
              }}
              />
            </View>
          )
        }} />
        <Tab.Screen name='Screen Five' component={Education} 
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: focused ? '#dce2ed' : 'transparent',
              borderRadius: 5,
            }}>
              <Image 
              source={require('../images/settings.png')}
              resizeMode='contain'
              style={{
                width: 25,
                height: 25,
                tintColor: focused ? '#2a52be' : '#000',
                margin: 10,
              }}
              />
            </View>
          )
        }} />
      </Tab.Navigator>
    )
  }
}
