
import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { schedule } from '../data/universityData';
import InfoCard from '../components/InfoCard';

export default function ScheduleScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>📅 Апталық сабақ кестесі</Text>
      {schedule.map((item, index) => (
        <InfoCard
          key={index}
          title={`${item.day} • ${item.time}`}
          subtitle={item.subject}
          detail={`Аудитория: ${item.room} | Оқытушы: ${item.teacher}`}
        />
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 22, fontWeight: 'bold', color: '#17366F', marginBottom: 20 },
});
