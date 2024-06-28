import React from 'react';
import { ScrollView, View, Image, StyleSheet, TouchableOpacity, Text } from 'react-native';
import { GroupHeader } from '../../components/PostPages/GroupHeader';
import { ActionsContainer } from '../../components/PostPages/ActionsContainer';
import { MembersContainer } from '../../components/PostPages/MembersContainer';
import { DatesContainer } from '../../components/PostPages/DatesContainer';
import { useNavigation } from '@react-navigation/native';

export function PostPage() {
  const navigation = useNavigation();

  const groupDetails = {
    title: "2.7.0 Toujours plus haut",
    members: ["@kalash", "@rigolekom1jnoun93", "6 autres"],
    startDate: "07/06/24",
    endDate: "10/06/24",
    imageUri: 'https://reactnative.dev/img/tiny_logo.png',
  };

  const handleAddMember = () => {
    // (add member) Bon courage
  };

  const handleQueue = () => {
    // (file d'attente) Vraiment bon courage la
  };

  const handleLeaveGroup = () => {
    // (quitter le groupe) ça devrait etre plus simple celui la
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.groupContainer}>
        <GroupHeader title={groupDetails.title} />
        <Image source={{ uri: groupDetails.imageUri }} style={styles.groupImage} />
        <ActionsContainer 
          onAddMember={handleAddMember}
          onQueue={handleQueue}
          onLeaveGroup={handleLeaveGroup}
        />
        <MembersContainer members={groupDetails.members} />
        <DatesContainer startDate={groupDetails.startDate} endDate={groupDetails.endDate} />
        <TouchableOpacity style={styles.subtitleContainer} onPress={() => navigation.navigate('ModifyPostPage')}>
          <Text style={styles.groupSubtitle}>Modifier l'annonce</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  groupContainer: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  groupImage: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
    borderRadius: 10,
    marginBottom: 10,
  },
  subtitleContainer: {
    backgroundColor: '#FF0000',
    flex: 1,
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    margin: 40,
    justifyContent: 'center',
  },
  groupSubtitle: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default PostPage;
