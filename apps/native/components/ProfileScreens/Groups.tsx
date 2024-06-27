import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface GroupsProps {
  groups: string[];
}

export const Groups = ({ groups }: GroupsProps) => {
  return (
    <View style={styles.groupsContainer}>
      <Text style={styles.sectionTitle}>Groupes</Text>
      {groups.map((group, index) => (
        <Text key={index} style={styles.groupsText}>{group}</Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  groupsContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  groupsText: {
    color: '#424242',
  },
});
