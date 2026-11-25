
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView
} from 'react-native';

type Props = {
  title: string;
  children: React.ReactNode;
};

export default function ScreenLayout({
  title,
  children
}: Props) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {children}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3F6FC',
  },
  content: {
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#17366F',
    marginBottom: 20,
  },
});
