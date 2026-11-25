
import React from 'react';
import { Text, StyleSheet } from 'react-native';
import ScreenLayout from './ScreenLayout';

type Props = {
  title: string;
  description: string;
};

export default function InfoScreen({
  title,
  description
}: Props) {
  return (
    <ScreenLayout title={title}>
      <Text style={styles.description}>
        {description}
      </Text>
      <Text style={styles.note}>
        University Mobile App
      </Text>
    </ScreenLayout>
  );
}

const styles = StyleSheet.create({
  description: {
    fontSize: 16,
    color: '#52617A',
    lineHeight: 25,
  },
  note: {
    marginTop: 25,
    color: '#2457C5',
    fontWeight: 'bold',
  },
});
