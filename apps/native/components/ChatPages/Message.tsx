import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MessageProps {
  user: string;
  message: string;
}

export function Message({ user, message }: MessageProps) {
  return (
    <View style={styles.messageContainer}>
      <Text style={styles.user}>{user}</Text>
      <Text style={styles.message}>{message}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    padding: 15,
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
  },
  user: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  message: {
    color: '#666',
    marginTop: 5,
  },
});
