import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Button,
    View,
} from 'react-native';
export default class MyOrder extends React.Component {
    static navigationOptions = {
        title: '测试',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>测试</Text>
                <Button onPress={()=>{
                  this.props.navigation.navigate('Main'); }} title="返回"/>
            </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})