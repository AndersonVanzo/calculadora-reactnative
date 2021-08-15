import React from 'react';
import {
  Text,
  View
} from 'react-native';
import styles from '../config/styles';

export default ({ number, color }) => {
  return (
    <View style={styles.button}>
      <Text style={[styles.fontLarge, styles.fontBold, { color: color }]}>{number}</Text>
    </View>
  );
}