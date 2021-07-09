import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Liste from './components/Liste';


function App() {
  return (
    <View style={styles.container}>
      <Text>
        LES PAYS SONT LES SUIVANTS
      </Text>
      <Liste />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default App;