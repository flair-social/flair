import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface BioProps {
  bio: string;
}

export const Bio = ({ bio }: BioProps) => {
  return (
    <View style={styles.bioContainer}>
      <Text style={styles.sectionTitle}>Biographie</Text>
      <Text style={styles.bioText}>{bio}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  bioContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  bioText: {
    color: '#424242',
  },
});
