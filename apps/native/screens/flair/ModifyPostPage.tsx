import React from 'react';
import { ScrollView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { BackArrow } from '../../components/ModifyPostPage/BackArrow';
import { EditButton } from '../../components/ModifyPostPage/EditButton';
import { PhotoGrid } from '../../components/ModifyPostPage/PhotoGrid';
import { TagList } from '../../components/ModifyPostPage/TagList';
import { LocationDetails } from '../../components/ModifyPostPage/LocationDetails';
import { useNavigation } from '@react-navigation/native';

export function ModifyPostPage() {
  const navigation = useNavigation();

  const photos = [
    { uri: 'https://reactnative.dev/img/tiny_logo.png' },
    { uri: 'https://reactnative.dev/img/tiny_logo.png' },
    { uri: 'https://reactnative.dev/img/tiny_logo.png' },
    { uri: 'https://reactnative.dev/img/tiny_logo.png' }
  ];

  const tags = ['tag1', 'tag2', 'tag3', 'tag4', 'tag5', 'tag6', 'tag7', 'tag8'];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <BackArrow />
        <Text style={styles.title}>Modifier l'annonce</Text>
        <EditButton />
      </View>
      <PhotoGrid photos={photos} />
      <TagList tags={tags} />
      <TextInput
        style={styles.descriptionInput}
        placeholder="Description de l'annonce"
        multiline
      />
      <LocationDetails location="95 Avenue Parmentier" />
      <TextInput
        style={styles.durationInput}
        placeholder="Durée de l'annonce"
      />
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.previewButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Aperçu</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.confirmButton} onPress={() => navigation.goBack()}>
          <Text style={styles.buttonText}>Confirmer</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.deleteButton} onPress={() => {}}>
          <Text style={styles.buttonText}>Supprimer l'annonce</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  descriptionInput: {
    height: 80,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  durationInput: {
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  buttonText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  previewButton: {
    margin: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  confirmButton: {
    margin: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
  deleteButton: {
    margin: 15,
    padding: 10,
    borderRadius: 5,
    backgroundColor: '#f0f0f0',
  },
});

export default ModifyPostPage;
