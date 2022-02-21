import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer, DarkTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { LineChart } from 'react-native-chart-kit';

import HomeStackScreen from './screens/HomeStackScreen';
import GamesScreen from './screens/GamesScreen';
import SettingsScreen from './screens/SettingsScreen';

// Create Navigator for 3-tab layout
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer theme={DarkTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            var iconName;

            switch (route.name) {
              case 'Home':
                iconName = focused ? 'ios-stats-chart' : 'ios-stats-chart-outline';
                break;
              case 'Games':
                iconName = focused ? 'md-game-controller' : 'md-game-controller-outline';
                break;
              case 'Settings':
                iconName = focused ? 'md-list' : 'md-list-outline' ;
            }

            // Return icon component
            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="Home" component={HomeStackScreen}/>
        <Tab.Screen name="Games" component={GamesScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}


