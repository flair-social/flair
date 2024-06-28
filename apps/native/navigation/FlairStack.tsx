import { createStackNavigator } from "@react-navigation/stack";
import { FlairListScreen } from "../screens/flair/FlairListScreen";
import { PostStack } from "../navigation/PostStack";

export function FlairStack() {
  const Stack = createStackNavigator();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="FlairListScreen" component={FlairListScreen} />
      <Stack.Screen name="PostStack" component={PostStack} />
    </Stack.Navigator>
  );
}
