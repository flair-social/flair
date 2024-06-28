import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface MembersContainerProps {
  members: string[];
}

export const MembersContainer = ({ members }: MembersContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Membres</Text>
      <Text style={styles.text}>{members.join(', ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  text: {
    color: '#424242',
  },
});
