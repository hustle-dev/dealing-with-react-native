import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import WriteHeader from '../components/WrtieHeader';

function WriteScreen() {
  return (
    <SafeAreaView style={styles.block}>
      <WriteHeader />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  block: {
    flex: 1,
    backgroundColor: 'white',
  },
});

export default WriteScreen;
