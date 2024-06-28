import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export const LocationDetails = ({ location }) => {
  return (
    <View style={styles.locationContainer}>
      <Text style={styles.locationText}>Localisation de l'annonce</Text>
      <View style={styles.addressContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/marker.png' }}
          style={styles.locationIcon}
        />
        <Text style={styles.addressText}>{location}</Text>
      </View>
      <View style={styles.informationVisibility}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-glyphs/30/info--v1.png' }}
          style={styles.informationIcon}
        />
        <Text style={styles.visibilityText}>L'adresse exacte ne sera pas visible</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  locationContainer: {
    marginBottom: 10,
  },
  locationText: {
    fontSize: 16,
    marginBottom: 5,
  },
  addressContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    backgroundColor: '#e0e0e0',
    padding: 10,
    borderRadius: 5,
  },
  addressText: {
    color: '#424242',
  },
  informationVisibility: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  locationIcon: {
    width: 15,
    height: 15,
    marginRight: 10,
  },
  informationIcon: {
    width: 15,
    height: 15,
    margin: 5,
    marginTop: 10,
  },
  visibilityText: {
    fontSize: 12,
    color: '#888',
    marginTop: 5,
  },
});
