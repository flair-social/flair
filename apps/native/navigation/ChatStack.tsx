import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ChatScroll from '../screens/chat/ChatScroll';
import ChatPage from '../screens/chat/ChatPage';

const Stack = createStackNavigator();

export function ChatStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ChatScroll" component={ChatScroll} options={{ headerShown: false }} />
      <Stack.Screen name="ChatPage" component={ChatPage} options={{ headerShown: false }} />
    </Stack.Navigator>
  );
}
