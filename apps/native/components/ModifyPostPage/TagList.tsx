import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const TagList = ({ tags }) => {
  return (
    <View style={styles.tagsContainer}>
      <TouchableOpacity style={styles.addTagButton}>
        <Text style={styles.addTagText}>+ Ajouter des tags</Text>
      </TouchableOpacity>
      {tags.map((tag, index) => (
        <View key={index} style={styles.tag}>
          <Text style={styles.tagText}>{tag}</Text>
          <TouchableOpacity>
            <Image
              source={{ uri: 'https://img.icons8.com/ios-filled/50/cancel.png' }}
              style={styles.tagRemove}
            />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  addTagButton: {
    backgroundColor: '#e0f7fa',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  addTagText: {
    color: '#00796b',
  },
  tag: {
    flexDirection: 'row',
    backgroundColor: '#e0f0e0',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5,
    borderRadius: 5,
    marginRight: 5,
    marginBottom: 5,
  },
  tagText: {
    color: '#000',
  },
  tagRemove: {
    width: 13,
    height: 13,
    marginLeft: 5,
  },
});
