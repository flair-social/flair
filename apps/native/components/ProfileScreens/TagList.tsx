import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <View style={styles.tagContainer}>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: 20,
  },
  tag: {
    backgroundColor: '#e0f7fa',
    padding: 5,
    margin: 5,
    borderRadius: 5,
  },
  tagText: {
    color: '#00796b',
  },
});
