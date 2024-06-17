import {createStackNavigator} from "@react-navigation/stack";
import {FlairListScreen} from "../screens/flair/FlairListScreen";

export function FlairStack() {
  const Stack = createStackNavigator();

  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="FlairListScreen" component={FlairListScreen}/>
  </Stack.Navigator>
}
