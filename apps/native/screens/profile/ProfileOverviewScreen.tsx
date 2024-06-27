import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { TagList } from '../../components/ProfileScreens/TagList';
import { ProfileImage } from '../../components/ProfileScreens/ProfileImage';
import { Card } from '../../components/PostFlairScreen/Card';
import { Bio } from '../../components/ProfileScreens/Bio';
import { Username } from '../../components/ProfileScreens/Username';
import { Groups } from '../../components/ProfileScreens/Groups';

export function ProfileOverviewScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileContainer}>
        <ProfileImage uri="https://reactnative.dev/img/tiny_logo.png" />
        <Username username="@maximesjohner" />
        <TagList tags={['Voiture', 'Bowling', 'Bars', 'Shopping', 'Jeux vidéos']} />
        <Bio bio="Coucou j'aime bien sortir" />
        <Groups groups={['les g', 'les homies', 'F.R.I.E.N.D']} />
        <View style={styles.badgesContainer}>
          <Text style={styles.sectionTitle}>Badges</Text>
        </View>
        <View style={styles.postsContainer}>
          <Text style={styles.sectionTitle}>Posts</Text>
          <TouchableOpacity style={styles.post} onPress={() => navigation.navigate('PostStack')}>
            <Card
              title="2.7.0 Toujours plus haut"
              subtitle=""
              tags={['Voiture', 'Bowling']}
              members={['@kaaris', '@b2oba']}
              redflagsAmount={2}
              postDate={new Date()}
              description="Nous sommes sur Paris pendant 3 jours venez nous voir on est sympa ! On aime bien sortir et aller dans les bars..."
              distance="A 10 KM"
              time="il y a 2 min."
              imageUri="https://reactnative.dev/img/tiny_logo.png"
            />
          </TouchableOpacity>
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
  post: {
    padding: 20,
    flex: 1,
  },
  profileContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  badgesContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  postsContainer: {
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
});
