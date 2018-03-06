import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import Button from 'antd-mobile/lib/button';
import TabBar from 'antd-mobile/lib/tab-bar';
import My from './My'
import Test from './Test'
import Menu from './Menu'
class Main extends Component {

    constructor() {
        super();
        this.state = {
            selectedTab: 'blueTab',
            hidden: false,
            fullScreen: true,
        };
    }

    onChangeTab(tabName) {
        this.setState({
            selectedTab: tabName,
        });
    }
    render() {
        return (

            <TabBar unselectedTintColor="#949494" tintColor="#33A3F4" barTintColor="#ccc">
                <TabBar.Item title="生活" selected={this.state.selectedTab === 'blueTab'} onPress={() => this.onChangeTab('blueTab')}>
                    <My />
                </TabBar.Item>
            </TabBar>
    )
    }
}

export default Main
