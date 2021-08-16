/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import type {Node} from 'react';
import {
  ScrollView,
  StatusBar,
  Text,
  View,
  Button,
  Image,
  SafeAreaView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './pages/HomeScreen';
import TrainingScreen from './pages/TrainingScreen';

function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

const App: () => Node = () => {
  useEffect(() => {
    console.log(StatusBar.currentHeight);
  }, []);
  return (
    <NavigationContainer style={{backgroundColor: '#F5F5FA'}}>
      <Tab.Navigator>
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: (color, size) => (
              <Ionicons name="ios-home-outline" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Training"
          component={TrainingScreen}
          options={{
            headerShown: true,
            headerTitle: "Gimnasios y Entrenadores",
            tabBarIcon: (color, size) => (
              <Ionicons name="ios-barbell" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Map"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: (color, size) => (
              <Ionicons name="ios-map-sharp" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen
          name="Settings"
          component={SettingsScreen}
          options={{
            headerShown: false,
            tabBarIcon: (color, size) => (
              <Ionicons name="ios-settings-outline" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
