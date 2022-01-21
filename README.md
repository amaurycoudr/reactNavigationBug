# Bug material top tabs navigation to a screen with options={{animationEnabled: false}}

I noticed a bug on android : When I navigate from a screen in a tab navigator to a screen with the option `animationEnabled: false`
we go back to the initialRoute of TabNavigator.

### navigator code :

```jsx
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
