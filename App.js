import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import My from './Components/My';
// import MainJsx from './components/Main/Main';
import Main from './Components/Main';
import { NativeRouter, Route, Link } from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
        <NativeRouter>
          <View style={styles.container}>
            <Text>test</Text>
            <Route exact path="/" component={Main} />
            <Route path="/My" component={My} />
            <Route path="/topics" component={My} />
          </View>
        </NativeRouter>
      
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
