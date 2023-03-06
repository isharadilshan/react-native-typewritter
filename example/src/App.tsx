import * as React from 'react';

import { StyleSheet, View } from 'react-native';
import { TypewritterView, TypeWriter } from 'react-native-typewritter';

export default function App() {
  return (
    <View style={styles.container}>
      <TypewritterView color="#333333" style={styles.box} />
      <TypeWriter
        loop={false}
        words={['this is beautiful', 'awesome', 'coder']}
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
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
