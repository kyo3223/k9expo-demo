import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import My from './Components/My';
import Main from './Components/Main';
import Test from './Components/Test';
import { NativeRouter, Route, Link } from 'react-router-native'

export default class App extends React.Component {
  render() {
    return (
      <NativeRouter>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!test</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        
        <Link
          to="/"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>Home</Text>
        </Link>
        <Link
          to="/about"
          underlayColor='#f0f4f7'
          style={styles.navItem}>
            <Text>About</Text>
        </Link>
        <Link
          to="/topics"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>Topics</Text>
        </Link>
        <Link
          to="/main"
          underlayColor='#f0f4f7'
          style={styles.navItem} >
            <Text>main</Text>
        </Link>
        <Route exact path="/" component={Test}/>
        <Route path="/about" component={My}/>
        <Route path="/Main" component={Main}/>
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
    marginTop:30
  },
  header: {
    fontSize: 20,
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  navItem: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
  },
  subNavItem: {
    padding: 5,
  },
  topic: {
    textAlign: 'center',
    fontSize: 15,
  }
});
