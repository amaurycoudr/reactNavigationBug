# Bug material top tabs navigation to a screen with options={{animationEnabled: false}}

I noticed a bug on android : When I navigate from a screen in a material top tab navigator to a screen with the option `animationEnabled: false`
we go back to the initialRoute of TabNavigator.

### video bug :

https://user-images.githubusercontent.com/60610067/150560456-cab330b5-f63f-4569-9fef-c39b3a1c9bf3.mp4


the blue flash corresponds to the screen where the navigation should take us

### navigator code :

```jsx
const Stack = createStackNavigator();
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
```
