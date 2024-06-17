import {NavigationContainer} from "@react-navigation/native";
import {SafeAreaProvider} from "react-native-safe-area-context";
import {useEffect, useState} from "react";
import {loadAsync} from "expo-font"
import {createStackNavigator} from "@react-navigation/stack";
import {AuthMainScreen} from "./screens/auth/AuthMainScreen";
import {MainContainer} from "./navigation/MainContainer";
import {Text} from "react-native";

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const [loggedIn, setLoggedIn] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        await loadAsync({
          Inter: require("./assets/fonts/Inter_variable.ttf")
        })
      } catch (e) {
        console.error(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  // if (!appIsReady) {
  //   return null;
  // }

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <SafeAreaProvider>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          {!loggedIn ? (
            <Stack.Screen name="Auth">
              {() => <AuthMainScreen/>}
            </Stack.Screen>
          ) : (
            <Stack.Screen name="MainContainer">
              {() => <MainContainer/>}
            </Stack.Screen>
          )}
        </Stack.Navigator>
      </SafeAreaProvider>
    </NavigationContainer>
  );
}
