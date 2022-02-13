import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Home screen</Text>
      <Button
        title="Go to settings"
        onPress={() => navigation.navigate("Settings")}
      />
    </View>
  )
}

function GamesScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Game screen</Text>
    </View>
  )
}

function SettingsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Settings screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
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
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="Games" component={GamesScreen}/>
        <Tab.Screen name="Settings" component={SettingsScreen}/>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
