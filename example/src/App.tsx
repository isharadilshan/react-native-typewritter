import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { TypeWriter } from 'react-native-typewritter';

export default function App() {
  return (
    <View style={styles.container}>
      <TypeWriter
        loop={false}
        words={['Hello World!', 'This is', 'a simple Typewriter']}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
