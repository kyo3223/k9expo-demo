import React from 'react';
import { ScrollView, StyleSheet,Button } from 'react-native';
import { ExpoLinksView } from '@expo/samples';

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <ScrollView style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
        <ExpoLinksView />
        <Button onPress={()=>{console.log(this.props);
          this.props.navigation.navigate('Settings'); }} title="test"/>
        <Button onPress={()=>{
          this.props.navigation.navigate('MyOrder'); }} title="测试"/>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
