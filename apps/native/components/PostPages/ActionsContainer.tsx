import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface ActionsContainerProps {
  onAddMember: () => void;
  onQueue: () => void;
  onLeaveGroup: () => void;
}

export const ActionsContainer = ({ onAddMember, onQueue, onLeaveGroup }: ActionsContainerProps) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onAddMember}>
        <Image source={{ uri: 'https://img.icons8.com/pastel-glyph/64/add-male-user.png' }} style={styles.image} />
        <Text style={styles.text}>Ajouter</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onQueue}>
        <Image source={{ uri: 'https://img.icons8.com/material-outlined/24/hourglass--v1.png' }} style={styles.image} />
        <Text style={styles.text}>File d'attente</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={onLeaveGroup}>
        <Image source={{ uri: 'https://img.icons8.com/ios-glyphs/30/exit.png' }} style={styles.image} />
        <Text style={styles.text}>Quitter le groupe</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    marginBottom: 20,
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#0033',
    borderRadius: 5,
    margin: 10,
    justifyContent: 'center',
  },
  text: {
    color: '#000',
    alignItems: 'center',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  image: {
    height: 23,
    width: 23,
  },
});
