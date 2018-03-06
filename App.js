import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import My from './Components/My';
// import MainJsx from './components/Main/Main';
import Main from './Components/Main';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <My/>
        <Main/>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
