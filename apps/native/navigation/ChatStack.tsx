import {createStackNavigator} from "@react-navigation/stack";

export function ChatStack() {
  const Stack = createStackNavigator();

  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="ConversationListScreen">
      {() => <></>}
    </Stack.Screen>
  </Stack.Navigator>
}
