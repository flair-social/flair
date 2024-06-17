import {createStackNavigator} from "@react-navigation/stack";

export function ProfileStack() {
  const Stack = createStackNavigator();

  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ProfileOverviewScreen">
      {() => <></>}
    </Stack.Screen>
  </Stack.Navigator>
}
