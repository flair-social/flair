import React from 'react';
import { TouchableOpacity, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export const BackArrow = () => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backArrow}>
      <Image
        source={{ uri: 'https://img.icons8.com/external-tanah-basah-basic-outline-tanah-basah/24/external-chevron-arrows-tanah-basah-basic-outline-tanah-basah-6.png' }}
        style={styles.backArrowImage}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  backArrow: {
    width: 20,
    height: 20,
  },
  backArrowImage: {
    width: 20,
    height: 20,
  },
});
