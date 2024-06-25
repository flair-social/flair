import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { useEffect, useState } from "react";
import { loadAsync } from "expo-font";
import { createStackNavigator } from "@react-navigation/stack";
import { AuthMainScreen } from "./screens/auth/AuthMainScreen";
import { RootContainer } from "./navigation/RootContainer";
import { Text } from "react-native";

export default function App() {
  const [isAppReady, setIsAppReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await loadAsync({
          Inter: require("./assets/fonts/Inter_variable.ttf")
        });
      } catch (e) {
        console.error(e);
      } finally {
        setIsAppReady(true);
      }
    })();
  }, []);

  if (!isAppReady) {
    return null;
  }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {!isLoggedIn ? (
            <Stack.Screen name="Auth">{() => <AuthMainScreen />}</Stack.Screen>
          ) : (
            <Stack.Screen name="MainContainer">
              {() => <RootContainer />}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
