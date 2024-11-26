import React from 'react';
import { View, StyleSheet } from 'react-native';
import TeksTengah from './components/tekstengh';
import DuaKotak from './components/duakotak';

const App = () => {
  return (
    <View style={styles.container}>
      <TeksTengah />
      <DuaKotak />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
