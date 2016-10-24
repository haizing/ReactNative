/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    TouchableHighlight,
    Alert,
    View
} from 'react-native';

var alertMessage = '得到你的爱情，还要再得到你任性。一切原是注定，因我跟你都任性。《明知故犯》';


class MyProject extends Component {
//发送Ajax请求
    sendAjax(){
        //POST方式
        fetch("http://192.168.3.82:8085", {
            method: "POST",
            mode: "cors",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: 'key=1'
        }).then(function (res) {
            console.log("fetch request ", JSON.stringify(res.ok));
            if(res.ok){
                res.json().then(function (json) {
                    console.info(json);
                    Alert.alert('提示','来自后台数据：名字'+json.name+'、年龄'+json.age,[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
                });
            }else{
                Alert.alert('提示','请求失败',[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
            }

        }).catch(function (e) {
            console.log("fetch fail");
            Alert.alert('提示','系统错误',[{text: '确定', onPress: () => console.log('OK Pressed!')},]);
        });
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Hello World !{'\n'}
                    你好，世界 !
                </Text>
                <Text style={styles.welcome}>
                    Welcome to React Native!{'\n'}
                    欢迎来到React Native的世界
                </Text>
                <Text style={styles.instructions}>
                    To get started, edit index.android.js{'\n'}
                    开始做，编辑index.android.js
                </Text>
                <Text style={styles.instructions}>
                    Double tap R on your keyboard to reload,{'\n'}
                    双击按键R重新加载{'\n'}
                    Shake or press menu button for dev menu{'\n'}
                    摇动手机或者点击菜单，打卡调试按钮
                </Text>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => Alert.alert('提示',alertMessage)}>
                    <View style={styles.button}>
                        <Text>默认：Alert.alert</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper} 
                    onPress={() => Alert.alert('提示',alertMessage,[{text: '确认', onPress: () => console.log('OK Pressed!')},])}>
                    <View style={styles.button}>
                        <Text>一个按钮</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={this.sendAjax}>
                    <View style={styles.button}>
                        <Text>点击发送Ajax请求</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => Alert.alert('提示',alertMessage,
                        [
                          {text: '取消', onPress: () => console.log('Cancel Pressed!')},
                          {text: '确认', onPress: () => console.log('OK Pressed!')},
                        ]
                    )}>
                    <View style={styles.button}>
                        <Text>两个按钮</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                    onPress={() => Alert.alert('提示',alertMessage,
                        [
                          {text: '乙', onPress: () => console.log('Bar Pressed!')},
                          {text: '甲', onPress: () => console.log('Foo Pressed!')},
                          {text: '丙', onPress: () => console.log('Baz Pressed!')},
                        ]
                    )}>
                    <View style={styles.button}>
                        <Text>三个按钮</Text>
                    </View>
                </TouchableHighlight>
                <TouchableHighlight style={styles.wrapper}
                     onPress={() => Alert.alert('多个',alertMessage,
                        '..............'.split('').map((dot, index) => ({text: 'Button ' + index,onPress: () => console.log('Pressed ' + index)}))
                     )}>
                    <View style={styles.button}>
                        <Text>很多按钮</Text>
                    </View>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    wrapper: {
        borderRadius: 5,
        marginBottom: 5,
    },
    button: {
        backgroundColor: '#eeeeee',
        padding: 10,
    },
});

AppRegistry.registerComponent('MyProject', () => MyProject);
