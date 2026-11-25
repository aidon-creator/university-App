
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { books } from '../data/universityData';

export default function LibraryScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>📖 Электрондық кітапхана</Text>
      <Text style={styles.subtitle}>Оқу материалдары мен әдебиеттер</Text>
      {books.map((book, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.icon}>📚</Text>
          <Text style={styles.title}>{book.title}</Text>
          <Text style={styles.text}>Автор: {book.author}</Text>
          <Text style={styles.category}>{book.category}</Text>
          <Text style={styles.button}>Кітапты қарау →</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#17366F' },
  subtitle: { color: '#71809A', marginVertical: 12 },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 14 },
  icon: { fontSize: 32 },
  title: { fontSize: 17, color: '#17366F', fontWeight: 'bold', marginVertical: 10 },
  text: { color: '#64748B' },
  category: { color: '#2457C5', marginTop: 8 },
  button: { color: '#2457C5', fontWeight: 'bold', marginTop: 15 },
});
