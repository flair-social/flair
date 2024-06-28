import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

export const PhotoGrid = ({ photos }) => {
  return (
    <View style={styles.photosContainer}>
      <TouchableOpacity style={styles.addPhotoButton}>
        <Text style={styles.addPhotoText}>+ Ajoutez des photos</Text>
      </TouchableOpacity>
      {photos.map((photo, index) => (
        <Image
          key={index}
          source={{ uri: photo.uri }}
          style={styles.photo}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  photosContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 10,
  },
  addPhotoButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    backgroundColor: '#e0e0e0',
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 12,
  },
  addPhotoText: {
    color: '#00796b',
  },
  photo: {
    width: 80,
    height: 80,
    marginRight: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
});
