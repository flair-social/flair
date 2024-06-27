import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TagList } from './TagList';

interface CardProps {
  title: string;
  subtitle?: string;
  tags: string[];
  members: string[];
  redflagsAmount: number;
  postDate: Date;
  description: string;
  distance: string;
  time: string;
  imageUri: string;
}

export function Card({
  title,
  subtitle,
  tags,
  members,
  redflagsAmount,
  postDate,
  description,
  distance,
  time,
  imageUri
}: CardProps) {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.imageWrapper}>
        <Image source={{ uri: imageUri }} style={styles.image} />
        <TagList tags={tags} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{title}</Text>
        {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        <Text style={styles.usernames}>{members.join(', ')}</Text>
        <Text style={styles.distance}>{distance}</Text>
        <Text style={styles.redFlags}>{redflagsAmount} REDFLAGS</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.time}>{time}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  cardContainer: {
    marginBottom: 20,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#f0f0f0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  imageWrapper: {
    position: 'relative',
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  infoContainer: {
    padding: 10,
    backgroundColor: "#F0F0F0", // Ajout de la couleur de fond
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginBottom: 10,
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
