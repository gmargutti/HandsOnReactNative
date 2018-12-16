import React, {Component} from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation'
import {Platform, StyleSheet, Text, View} from 'react-native';
import HomeScreen from './src/screens/HomeScreen';
import TripsScreen from './src/screens/TripsScreen'
import TripScreen from './src/screens/TripScreen'
import AddTripScreen from './src/screens/AddTripScreen'
import AddPointScreen from './src/screens/AddPointScreen'

const AppNavigator = createStackNavigator({
  Home: HomeScreen,
  Trips: TripsScreen,
  Trip: TripScreen,
  AddTrip: AddTripScreen,
  AddPoint: AddPointScreen
},
{
  initialRouteName: 'Trips'
})

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default createAppContainer(AppNavigator)
