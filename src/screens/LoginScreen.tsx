import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function LoginScreen({ navigation }: any) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Жүйеге кіру</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <TextInput
        style={styles.input}
        placeholder="Құпия сөз"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />

      <CustomButton
        title="Кіру"
        onPress={() => navigation.navigate('MainTabs')}
      />

      <CustomButton
        title="Тіркелу"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25 },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2457C5',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#F0F3FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
});