import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export function ChatPage() {
  const navigation = useNavigation();
  const route = useRoute();
  const { message } = route.params;

  const messages = [
    { sender: 'Tom', message: 'wsh ça sort ????', time: '11.14', type: 'received' },
    { sender: 'me', message: 'ouais on va où ?', time: '11.14', type: 'sent' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text style={styles.backButton}>{'<'}</Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>{message.user}</Text>
        <TouchableOpacity>
          <Text style={styles.infoButton}>i</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.messageContainer}>
        {messages.map((msg, index) => (
          <View key={index} style={msg.type === 'sent' ? styles.sentMessage : styles.receivedMessage}>
            <Text style={styles.messageText}>{msg.message}</Text>
            <Text style={styles.messageTime}>{msg.time}</Text>
          </View>
        ))}
        <View style={styles.actionContainer}>
          <Text style={styles.actionText}>Accepter le rendez-vous avec {message.user} ?</Text>
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.actionButton}>
              <Text>Non</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text>Oui</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
  },
  backButton: {
    fontSize: 18,
    color: '#000',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  infoButton: {
    fontSize: 18,
    color: '#000',
  },
  messageContainer: {
    flex: 1,
    padding: 10,
  },
  sentMessage: {
    alignSelf: 'flex-end',
    backgroundColor: '#dcf8c6',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
  },
  receivedMessage: {
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    marginVertical: 5,
    borderColor: '#ccc',
    borderWidth: 1,
  },
  messageText: {
    fontSize: 16,
  },
  messageTime: {
    fontSize: 12,
    color: '#888',
    alignSelf: 'flex-end',
  },
  actionContainer: {
    marginVertical: 10,
    alignItems: 'center',
  },
  actionText: {
    fontSize: 16,
    marginBottom: 5,
  },
  actionButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  actionButton: {
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    marginHorizontal: 10,
  },
});

export default ChatPage;
