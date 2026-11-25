
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { subjects } from '../data/universityData';

export default function SubjectsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>📚 Менің пәндерім</Text>
      <Text style={styles.subtitle}>2026–2027 оқу жылы</Text>

      {subjects.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.number}>ПӘН № {index + 1}</Text>
          <Text style={styles.title}>{item.name}</Text>
          <Text style={styles.text}>Оқытушы: {item.teacher}</Text>
          <Text style={styles.text}>Кредит саны: {item.credits}</Text>
          <Text style={styles.grade}>Ағымдағы балл: {item.grade}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 23, fontWeight: 'bold', color: '#17366F' },
  subtitle: { color: '#71809A', marginVertical: 12 },
  card: { backgroundColor: 'white', padding: 18, borderRadius: 15, marginBottom: 13 },
  number: { color: '#2457C5', fontSize: 12, fontWeight: 'bold' },
  title: { color: '#17366F', fontSize: 18, fontWeight: 'bold', marginVertical: 10 },
  text: { color: '#64748B', marginBottom: 6 },
  grade: { color: '#2457C5', fontWeight: 'bold', marginTop: 8 },
});
