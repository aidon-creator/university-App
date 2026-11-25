
import React from 'react';
import { ScrollView, Text, View, StyleSheet } from 'react-native';
import { payments } from '../data/universityData';

export default function PaymentsScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.heading}>💳 Төлемдер</Text>

      <View style={styles.balance}>
        <Text style={styles.white}>Оқу ақысы туралы ақпарат</Text>
        <Text style={styles.amount}>250 000 ₸</Text>
        <Text style={styles.white}>Демонстрациялық сома</Text>
      </View>

      <Text style={styles.section}>Төлем тарихы</Text>

      {payments.map((item, index) => (
        <View style={styles.card} key={index}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.amountSmall}>{item.amount}</Text>
          <Text style={styles.text}>Күні: {item.date}</Text>
          <Text style={[
            styles.status,
            { color: item.status === 'Төленді' ? '#16A34A' : '#D97706' }
          ]}>
            {item.status}
          </Text>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 23, fontWeight: 'bold', color: '#17366F', marginBottom: 20 },
  balance: { backgroundColor: '#2457C5', padding: 25, borderRadius: 18 },
  white: { color: 'white' },
  amount: { fontSize: 30, color: 'white', fontWeight: 'bold', marginVertical: 12 },
  section: { fontSize: 20, fontWeight: 'bold', color: '#17366F', marginVertical: 20 },
  card: { backgroundColor: 'white', padding: 18, borderRadius: 15, marginBottom: 12 },
  title: { fontSize: 17, fontWeight: 'bold', color: '#17366F' },
  amountSmall: { fontSize: 20, color: '#2457C5', fontWeight: 'bold', marginTop: 10 },
  text: { color: '#64748B', marginTop: 8 },
  status: { fontWeight: 'bold', marginTop: 10 },
});
