
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { student } from '../data/universityData';

export default function ProfileScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Text style={styles.avatarText}>👩‍🎓</Text>
      </View>
      <Text style={styles.name}>{student.name}</Text>
      <Text style={styles.university}>{student.university}</Text>

      {[
        ['Студент ID', student.id],
        ['Оқу тобы', student.group],
        ['Мамандығы', student.specialty],
        ['Курс', student.year],
        ['GPA', student.gpa],
        ['Оқу орны', student.university],
      ].map(([label, value]) => (
        <View style={styles.card} key={label}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.value}>{value}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 20 },
  avatar: { alignSelf: 'center', backgroundColor: '#DCE8FF', width: 95, height: 95, borderRadius: 50, justifyContent: 'center', alignItems: 'center', marginTop: 15 },
  avatarText: { fontSize: 48 },
  name: { textAlign: 'center', fontSize: 23, fontWeight: 'bold', color: '#17366F', marginTop: 15 },
  university: { textAlign: 'center', color: '#71809A', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 16, borderRadius: 13, marginBottom: 10 },
  label: { color: '#71809A', fontSize: 13 },
  value: { color: '#17366F', fontSize: 16, fontWeight: 'bold', marginTop: 5 },
});
