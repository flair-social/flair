import React from 'react';
import { ScrollView, View, StyleSheet, TouchableOpacity } from 'react-native';
import { SearchBar } from '../../components/ChatPages/SearchBar';
import { Message } from '../../components/ChatPages/Message';
import { useNavigation } from '@react-navigation/native';

const messages = [
  { user: '10.12.14 BUREAU', message: 'Kalash : sauvage' },
  { user: 'Tom', message: 'Vous : wsh ça sort ????' },
  { user: 'Djolanoouille', message: 'Vous : A quelle heure au duplex du coup ?' },
  { user: 'Naps', message: "Naps : C'est la kiffance !" },
  { user: "Vue.js c'est so 2022", message: "Aurélien : Qui y arrive pour l'auth ?" },
  { user: 'Newwave', message: "BenzJ : J'adore R2D2 sur la nouvelle prod NewJazz" },
  { user: 'George Floyd', message: 'Vous : pk tu rep plus ?' },
  { user: 'PouletAnanas', message: "landry : façon les blancs vous savez pas mettre d'épices" },
  { user: 'Dézingueur2Folles93', message: 'AD : On se revoit le prochain 20 Avril ?' },
  { user: 'PSG on top', message: 'Stanislas a quitté le groupe.' },
];

export function ChatScroll() {
  const navigation = useNavigation();

  const handlePressMessage = (message: { user: string; message: string }) => {
    navigation.navigate('ChatPage', { message });
  };

  return (
    <View style={styles.container}>
      <SearchBar placeholder="Recherchez" />
      <ScrollView>
        {messages.map((message, index) => (
          <TouchableOpacity key={index} onPress={() => handlePressMessage(message)}>
            <Message user={message.user} message={message.message} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default ChatScroll;
