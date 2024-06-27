import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TagProps {
  text: string;
}

export function Tag({ text }: TagProps) {
  return (
    <View style={styles.tag}>
      <Text style={styles.tagText}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  tag: {
    backgroundColor: "#f0f0f0",
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
    marginBottom: 5
  },
  tagText: {
    color: "#000"
  }
});
