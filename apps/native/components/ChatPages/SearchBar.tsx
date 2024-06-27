import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

interface SearchBarProps {
  placeholder: string;
}

export function SearchBar({ placeholder }: SearchBarProps) {
  return <TextInput style={styles.searchBar} placeholder={placeholder} />;
}

const styles = StyleSheet.create({
  searchBar: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 20,
    margin: 10,
    paddingHorizontal: 15,
  },
});
