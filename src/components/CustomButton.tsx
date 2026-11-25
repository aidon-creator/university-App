
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet
} from 'react-native';

type Props = {
  title: string;
  onPress: () => void;
};

export default function CustomButton({
  title,
  onPress
}: Props) {
  return (
    <TouchableOpacity
      style={styles.button}
      onPress={onPress}
    >
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#2457C5',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginVertical: 8,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
