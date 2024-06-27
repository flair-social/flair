import React from 'react';
import { ScrollView } from 'react-native';
import { Message } from './Message';

interface MessageListProps {
  messages: { user: string; message: string }[];
}

export function MessageList({ messages }: MessageListProps) {
  return (
    <ScrollView>
      {messages.map((message, index) => (
        <Message key={index} user={message.user} message={message.message} />
      ))}
    </ScrollView>
  );
}
