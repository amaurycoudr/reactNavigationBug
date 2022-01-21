// In App.js in a new project

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import * as React from 'react';
import 'react-native-gesture-handler';
import {enableFreeze} from 'react-native-screens';
import {RootParamList} from './routes';
import HomeScreen from './src/screens/HomeScreen';
import BugScreen from './src/screens/BugScreen';
import SettingsScreen from './src/screens/SettingsScreen';

enableFreeze(true);

const Stack = createStackNavigator<typeof RootParamList>();
const Tab = createMaterialTopTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="home" component={HomeScreen} />
      <Tab.Screen name="settings" component={SettingsScreen} />
    </Tab.Navigator>
  );
};

const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="tabNavigator" component={TabNavigator} />
    <Stack.Screen
      name="bug"
      options={{animationEnabled: false}}
      component={BugScreen}
    />
  </Stack.Navigator>
);

function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default App;
