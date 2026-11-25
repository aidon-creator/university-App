
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { events } from '../data/universityData';

export default function EventsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🎉 Университет іс-шаралары</Text>
      {events.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.date}>📅 {item.date}</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.text}>🕒 Уақыты: {item.time}</Text>
          <Text style={styles.text}>📍 Өтетін орны: {item.place}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#17366F', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 15 },
  date: { color: '#2457C5', fontWeight: 'bold' },
  title: { color: '#17366F', fontSize: 19, fontWeight: 'bold', marginVertical: 12 },
  text: { color: '#64748B', marginTop: 8 },
});
