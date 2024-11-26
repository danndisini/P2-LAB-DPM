import React from 'react';
import { View, StyleSheet } from 'react-native';

const DuaKotak = () => {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    backgroundColor: '#f0f0f0',
  },
  box: {
    width: 100,
    height: 100,
  },
  box1: {
    backgroundColor: 'black',
  },
  box2: {
    backgroundColor: 'white',
  },
});

export default DuaKotak;
