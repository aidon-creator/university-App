
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {
  title: string;
  subtitle?: string;
  detail?: string;
};

export default function InfoCard({ title, subtitle, detail }: Props) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
      {detail && <Text style={styles.detail}>{detail}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 17,
    borderRadius: 15,
    marginBottom: 13,
    borderWidth: 1,
    borderColor: '#E7ECF5',
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#17366F',
  },
  subtitle: {
    color: '#64748B',
    marginTop: 7,
    fontSize: 14,
  },
  detail: {
    color: '#2457C5',
    marginTop: 8,
    fontWeight: '600',
  },
});
