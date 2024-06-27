import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

interface UsernameProps {
  username: string;
}

export const Username = ({ username }: UsernameProps) => {
  return (
    <View style={styles.namemodify}>
      <Text style={styles.username}>{username}</Text>
      <Image
        source={{ uri: 'https://img.icons8.com/ios-filled/50/edit--v1.png' }}
        style={styles.imagemodify}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  namemodify: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  imagemodify: {
    width: 15,
    height: 15,
    justifyContent: 'flex-end',
    padding: 5,
    margin: 5,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 20,
  },
});
