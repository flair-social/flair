import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface DatesContainerProps {
  startDate: string;
  endDate: string;
}

export const DatesContainer = ({ startDate, endDate }: DatesContainerProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dates</Text>
      <Text style={styles.text}>Du {startDate} au {endDate}</Text>
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
