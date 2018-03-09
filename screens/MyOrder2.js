import React from 'react';
import {
    StyleSheet,
    ScrollView,
    Text,
    Button,
    View,
} from 'react-native';
export default class MyOrder2 extends React.Component {
    static navigationOptions = {
        title: '完成',
    };

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>完成</Text>
                <Button onPress={()=>{
                  this.props.navigation.navigate('Main'); }} title="主页"/>
            </ScrollView>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    }
})