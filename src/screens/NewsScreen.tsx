
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { news } from '../data/universityData';

export default function NewsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>📰 Университет жаңалықтары</Text>
      {news.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.date}>{item.date}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.description}>{item.description}</Text>
          <Text style={styles.link}>Толығырақ →</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#17366F', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 15 },
  date: { color: '#2457C5', fontSize: 13 },
  title: { fontSize: 18, fontWeight: 'bold', color: '#17366F', marginVertical: 12 },
  description: { color: '#64748B', lineHeight: 23 },
  link: { color: '#2457C5', fontWeight: 'bold', marginTop: 15 },
});
