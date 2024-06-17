import React from 'react';
import { ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export function FlairListScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.imagetagwrapper}>
        <View style={styles.tagimage}>
          <View style={styles.tagContainer}>
            <View style={styles.tag}>
              <Text style={styles.tagText}>voiture</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>netflix</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>bar à shot</Text>
            </View>
            <View style={styles.tag}>
              <Text style={styles.tagText}>volleyball</Text>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image
              source={{
                uri: 'https://reactnative.dev/img/tiny_logo.png',
              }}
              style={styles.image}
            />
          </View>
        </View>
      </View>
      <View style={styles.infoContainerWrapper}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>2.7.0 toujours plus haut</Text>
          <Text style={styles.usernames}>@kaaris, @b2oba</Text>
          <Text style={styles.distance}>A 10 KM</Text>
          <Text style={styles.redFlags}>2 REDFLAGS</Text>
          <Text style={styles.description}>
            Nous sommes sur Paris pendant 3 jours venez nous voir on est sympa ! On aime bien sortir et aller dans les bars...
          </Text>
          <Text style={styles.time}>il y a 2 min.</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  imagetagwrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tagimage: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  tagContainer: {
    position : 'absolute',
    zIndex : 2,
    flexDirection: 'row',
    padding: 15,
    flexWrap: 'wrap',
  },
  infoContainerWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tag: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    marginRight: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  tagText: {
    color: '#000',
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    zIndex : 1,
    width: 350,
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
  },
  infoContainer: {
    padding: 10,
    width: 350,
    height: 200,
    backgroundColor: '#F0F0F0',
    borderRadius : 10,
    justifyContent : 'center',
  },

  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  usernames: {
    color: '#888',
  },
  distance: {
    color: '#888',
  },
  redFlags: {
    color: 'red',
    fontWeight: 'bold',
  },
  description: {
    marginTop: 10,
    fontSize: 16,
  },
  time: {
    marginTop: 5,
    color: '#888',
  },
});
