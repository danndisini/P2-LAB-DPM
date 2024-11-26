import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const TeksTengah = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Teks di Tengah</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  text: {
    fontSize: 24,
    color: 'blue',
    fontWeight: 'bold',
  },
});

export default TeksTengah;
