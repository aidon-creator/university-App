
import React, { useState } from 'react';
import { View, Text, Switch, StyleSheet, Alert } from 'react-native';

export default function SettingsScreen() {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>⚙️ Баптаулар</Text>

      <View style={styles.card}>
        <Text style={styles.title}>🔔 Хабарландырулар</Text>
        <Switch
          value={notifications}
          onValueChange={setNotifications}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🌙 Қараңғы режим</Text>
        <Switch
          value={darkMode}
          onValueChange={setDarkMode}
        />
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>🌐 Тіл</Text>
        <Text style={styles.value}>Қазақша</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>📱 Қосымша нұсқасы</Text>
        <Text style={styles.value}>Version 1.0.0</Text>
      </View>

      <Text
        style={styles.logout}
        onPress={() => Alert.alert('Шығу', 'Бұл демонстрациялық бөлім.')}
      >
        Жүйеден шығу
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F3F6FC', padding: 18 },
  heading: { fontSize: 23, fontWeight: 'bold', color: '#17366F', marginBottom: 25 },
  card: { backgroundColor: 'white', padding: 18, borderRadius: 14, marginBottom: 13, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  title: { color: '#17366F', fontWeight: 'bold', fontSize: 15 },
  value: { color: '#64748B' },
  logout: { textAlign: 'center', color: '#DC2626', fontWeight: 'bold', marginTop: 30, fontSize: 16 },
});
