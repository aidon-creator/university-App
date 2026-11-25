
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { notifications } from '../data/universityData';

export default function NotificationsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>🔔 Хабарламалар</Text>

      {notifications.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.icon}>🔵</Text>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.message}>{item.message}</Text>
          <Text style={styles.date}>{item.date}</Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 23, fontWeight: 'bold', color: '#17366F', marginBottom: 20 },
  card: { backgroundColor: 'white', padding: 20, borderRadius: 15, marginBottom: 13 },
  icon: { fontSize: 20 },
  title: { color: '#17366F', fontWeight: 'bold', fontSize: 17, marginTop: 10 },
  message: { color: '#64748B', marginTop: 8, lineHeight: 22 },
  date: { color: '#2457C5', fontSize: 12, marginTop: 12 },
});
