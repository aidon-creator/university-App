import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CustomButton from '../components/CustomButton';

export default function SplashScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.logo}>🎓</Text>
      <Text style={styles.title}>UNIVERSITY</Text>
      <Text style={styles.subtitle}>Student Mobile Application</Text>
      <CustomButton
        title="Бастау"
        onPress={() => navigation.navigate('Login')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
    backgroundColor: '#F3F6FC',
  },
  logo: { fontSize: 75, textAlign: 'center' },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2457C5',
  },
  subtitle: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#52617A',
  },
});