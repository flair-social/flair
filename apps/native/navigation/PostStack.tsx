import React from 'react';
import { createStackNavigator } from "@react-navigation/stack";
import { PostPage } from "../screens/flair/PostPage";
import { ModifyPostPage } from "../screens/flair/ModifyPostPage";

const Stack = createStackNavigator();

export function PostStack() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Postpage" component={PostPage} />
      <Stack.Screen name="ModifyPostPage" component={ModifyPostPage} options={{ title: 'Modify Postpage' }} />
    </Stack.Navigator>
  );
}
