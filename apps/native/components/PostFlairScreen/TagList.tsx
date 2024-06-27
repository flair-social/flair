import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Tag } from './Tag';

interface TagListProps {
  tags: string[];
}

export function TagList({ tags }: TagListProps) {
  return (
    <View style={styles.tagContainer}>
      {tags.map((tag, index) => (
        <Tag key={index} text={tag} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  tagContainer: {
    position: 'absolute',
    top: 15,
    left: 15,
    flexDirection: 'row',
    flexWrap: 'wrap',
    zIndex: 10
  }
});
