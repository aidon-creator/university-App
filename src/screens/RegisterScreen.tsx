import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function RegisterScreen({ navigation }: any) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Тіркелу</Text>

      <TextInput
        style={styles.input}
        placeholder="Аты-жөніңіз"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />

      <CustomButton
        title="Тіркелу"
        onPress={() => navigation.navigate('MainTabs')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 25 },
  title: {
    fontSize: 28,
    color: '#2457C5',
    fontWeight: 'bold',
    marginBottom: 25,
  },
  input: {
    backgroundColor: '#F0F3FA',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
});