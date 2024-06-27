import { createStackNavigator } from "@react-navigation/stack";
import { ProfileOverviewScreen } from "../screens/profile/ProfileOverviewScreen";

const Stack = createStackNavigator();

export function ProfileStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="ProfileOverviewScreen" component={ProfileOverviewScreen} />
    </Stack.Navigator>
  );
}
