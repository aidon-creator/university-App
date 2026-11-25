
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { subjects, student } from '../data/universityData';

export default function GradesScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.gpaCard}>
        <Text style={styles.white}>Жалпы GPA</Text>
        <Text style={styles.gpa}>{student.gpa}</Text>
        <Text style={styles.white}>Академиялық үлгерім</Text>
      </View>

      <Text style={styles.heading}>Пәндер бойынша бағалар</Text>

      {subjects.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.teacher}>{item.teacher}</Text>
          <View style={styles.row}>
            <Text style={styles.grade}>{item.grade} балл</Text>
            <Text style={styles.credits}>{item.credits} кредит</Text>
          </View>
          <View style={styles.progress}>
            <View style={[styles.fill, { width: `${item.grade}%` }]} />
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  gpaCard: { backgroundColor: '#2457C5', padding: 25, borderRadius: 18, alignItems: 'center' },
  white: { color: 'white', fontSize: 16 },
  gpa: { fontSize: 45, color: 'white', fontWeight: 'bold', margin: 10 },
  heading: { fontSize: 21, fontWeight: 'bold', color: '#17366F', marginVertical: 20 },
  card: { backgroundColor: 'white', padding: 17, borderRadius: 14, marginBottom: 13 },
  name: { fontSize: 17, fontWeight: 'bold', color: '#17366F' },
  teacher: { color: '#71809A', marginTop: 6 },
  row: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 12 },
  grade: { color: '#2457C5', fontWeight: 'bold' },
  credits: { color: '#71809A' },
  progress: { height: 8, backgroundColor: '#E5EAF4', borderRadius: 5, marginTop: 12 },
  fill: { height: 8, backgroundColor: '#2457C5', borderRadius: 5 },
});
