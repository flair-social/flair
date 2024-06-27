import React from 'react';
import { View, Image, StyleSheet } from 'react-native';

interface ProfileImageProps {
  uri: string;
}

export const ProfileImage = ({ uri }: ProfileImageProps) => {
  return (
    <View style={styles.profileImageWrapper}>
      <View style={styles.profileImage}>
        <Image source={{ uri }} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  profileImageWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e0e0e0',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
});
