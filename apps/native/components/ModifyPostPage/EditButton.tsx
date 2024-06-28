import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';

export const EditButton = () => {
  return (
    <TouchableOpacity style={styles.editButton}>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/50/edit--v1.png' }}
        style={styles.editIcon}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  editButton: {
    padding: 5,
  },
  editIcon: {
    width: 20,
    height: 20,
  },
});
