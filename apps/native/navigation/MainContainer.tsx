import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { SafeView } from "../components/SafeView";
import { useCallback } from "react";
import { RouteProp } from "@react-navigation/core/lib/typescript/src/types";
import { ParamListBase } from "@react-navigation/native";
import {
  faComment,
  faLayerGroup,
  faMap,
  faSquare,
  faUser,
  IconDefinition
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { FlairStack } from "./FlairStack";
import { MapStack } from "./MapStack";
import { ChatStack } from "./ChatStack";
import { ProfileStack } from "./ProfileStack";
import { BottomTabNavigationOptions } from "@react-navigation/bottom-tabs/lib/typescript/src/types";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { COLORS } from "../core/const";

export function MainContainer() {
  const Tab = createBottomTabNavigator();
  const insets = useSafeAreaInsets();

  const flairName = "Flair";
  const mapName = "Map";
  const chatName = "Chat";
  const profilName = "Profil";

  const getScreenOptions = useCallback(
    ({
      route
    }: {
      route: RouteProp<ParamListBase>;
      navigation: any;
    }): BottomTabNavigationOptions => ({
      tabBarActiveTintColor: COLORS.primary,
      tabBarInactiveTintColor: COLORS.muted,
      tabBarStyle: {
        height: 60 + insets.bottom
      },
      tabBarLabelStyle: {
        fontSize: 12,
        fontFamily: "Inter"
      },
      tabBarIcon: ({ color, size }) => {
        let icon: IconDefinition;
        switch (route.name) {
          case flairName:
            icon = faLayerGroup;
            break;
          case mapName:
            icon = faMap;
            break;
          case chatName:
            icon = faComment;
            break;
          case profilName:
            icon = faUser;
            break;
          default:
            icon = faSquare;
        }

        return <FontAwesomeIcon icon={icon} size={size} color={color} />;
      }
    }),
    []
  );

  return (
    <>
      <SafeView />
      <Tab.Navigator
        initialRouteName={flairName}
        screenOptions={getScreenOptions}
      >
        <Tab.Screen
          name={flairName}
          options={{ headerShown: false }}
          component={FlairStack}
        />
        <Tab.Screen
          name={mapName}
          options={{ headerShown: false }}
          component={MapStack}
        />
        <Tab.Screen
          name={chatName}
          options={{ headerShown: false }}
          component={ChatStack}
        />
        <Tab.Screen
          name={profilName}
          options={{ headerShown: false }}
          component={ProfileStack}
        />
      </Tab.Navigator>
    </>
  );
}
