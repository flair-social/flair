import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

interface GroupHeaderProps {
  title: string;
}

export const GroupHeader = ({ title }: GroupHeaderProps) => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-glyphs/30/multiply.png' }}
          style={styles.cross}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 5,
    marginLeft: 65,
  },
  button: {},
  cross: {
    width: 25,
    height: 25,
    marginLeft: 40,
  },
});
