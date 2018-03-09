import React from 'react';
import { ScrollView, StyleSheet, Button ,Dimensions,View,  Image,Text,TouchableHighlight} from 'react-native';
import { ExpoLinksView } from '@expo/samples';
var {width} = Dimensions.get('window');
var cols = 3;
var boxW = 100;
var vMargin = (width-cols*boxW)/(cols+1);
var hMargin = 25;
export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };
  renderAllBadge() {
    var BadgeData ={
      "data":[
        {
          "icon" : "danjianbao",
          "title" : "单肩包"
        },
        {
          "icon" : "liantiaobao",
          "title" : "链条包"
        },
        {
          "icon" : "qianbao",
          "title" : "钱包"
        },
        {
          "icon" : "shoutibao",
          "title" : "手提包"
        },
        {
          "icon" : "shuangjianbao",
          "title" : "双肩包"
        },
        {
          "icon" : "xiekuabao",
          "title" : "斜挎包"
        }
      ]
    };
    //定义数组所有的子组件
    var allBadge = [];
    //遍历json数据
    for (var i = 0; i < BadgeData.data.length; i++) {
      var model = BadgeData.data[i];
      //直接装入数组
      allBadge.push(
        <TouchableHighlight key={i} onPress={()=>{
          this.props.navigation.navigate('MyOrder');
        }}>
        <View key={i} style={styles.autoViewStyle}>
          <Image style={styles.imagesStyle} source={require('../assets/images/robot-dev.png')} />
          <Text style={styles.textsStyle}>{model.title}</Text>
          
        </View>
        </TouchableHighlight>
      );
    }
    //返回
    return allBadge;
  }


  render() {
    return (
      <View style={styles.container}>
        {/* Go ahead and delete ExpoLinksView and replace it with your
           * content, we just wanted to provide you with some helpful links */}
           {/*
        <ExpoLinksView />
        <Button onPress={() => {
          console.log(this.props);
          this.props.navigation.navigate('Settings');
         }} title="test" />
        <Button onPress={() => {
          this.props.navigation.navigate('MyOrder');
         }} title="测试" />*/}
        {this.renderAllBadge()}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // paddingTop: 15,
    // backgroundColor: '#fff',
    //横向
    flexDirection:'row',
    //换行显示
    flexWrap:'wrap'
  },
  autoViewStyle:{
    backgroundColor:'gray',
    //设置侧抽对齐
    alignItems:'center',
    width:boxW,
    height:boxW,
    marginLeft:vMargin,
    marginTop:hMargin
  },

  imagesStyle:{
    width:80,
    height:80

  },
  textsStyle:{


  }

});
