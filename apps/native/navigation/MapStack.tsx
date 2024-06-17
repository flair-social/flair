import {createStackNavigator} from "@react-navigation/stack";
import {MapMainScreen} from "../screens/map/MapMainScreen";

export function MapStack() {
  const Stack = createStackNavigator();

  return <Stack.Navigator screenOptions={{headerShown: false}}>
    <Stack.Screen name="MapMainScreen" component={MapMainScreen}/>
  </Stack.Navigator>
}
