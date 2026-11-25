
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { attendance } from '../data/universityData';

export default function AttendanceScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>✅ Сабаққа қатысу</Text>
      {attendance.map((item, index) => {
        const total = item.attended + item.missed;
        const percent = Math.round(item.attended / total * 100);

        return (
          <View style={styles.card} key={index}>
            <Text style={styles.title}>{item.subject}</Text>
            <Text style={styles.percent}>{percent}%</Text>
            <View style={styles.progress}>
              <View style={[styles.fill, { width: `${percent}%` }]} />
            </View>
            <Text style={styles.text}>Қатысқан: {item.attended} сабақ</Text>
            <Text style={styles.text}>Қатыспаған: {item.missed} сабақ</Text>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 23, fontWeight: 'bold', color: '#17366F', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 18, borderRadius: 15, marginBottom: 13 },
  title: { fontSize: 17, fontWeight: 'bold', color: '#17366F' },
  percent: { fontSize: 25, color: '#2457C5', fontWeight: 'bold', marginVertical: 10 },
  progress: { height: 9, backgroundColor: '#E5EAF4', borderRadius: 5, marginBottom: 12 },
  fill: { height: 9, backgroundColor: '#2457C5', borderRadius: 5 },
  text: { color: '#64748B', marginTop: 5 },
});
