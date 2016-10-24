/**
 * Created by xincap-47 on 2016/8/31.
 * ::1 - - [01/Sep/2016:02:22:37 +0000] "GET /favicon.ico HTTP/1.1" 404 24 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"
 */
import React, {Component} from 'react';
import {Text, TouchableOpacity, View, ToastAndroid, ScrollView, Navigator } from 'react-native';

import progressBarAndroid from './progressBarAndroid';
import activityIndicator from './activityIndicator';
import drawerLayoutAndroid from './drawerLayoutAndroid';
import switchButton from './switch';
import picker from './picker';
import toolbarAndroid from './toolbarAndroid';
import refreshControl from './refreshControl';
import webView from './webView';
import webViewExample from './webViewExample';
import scaledWebView from './scaledWebView';
import clipboard from './clipboard';
import datePickerAndroid from './datePickerAndroid';
import timePickerAndroid from './timePickerAndroid';
import statusBar from './statusBar';
import modal from './modal';
import modalExample from './modalExample';
import SlidingCompleteExample from './slider';
import linking from './linking';
import netInfoDemo from './netInfoDemo';


export default class Btn extends Component {
    render(){
        return(
            <TouchableOpacity style={styles.btn} onPress={this.props.onPress}>
                <Text style={styles.text}>{this.props.text}</Text>
            </TouchableOpacity>
        )
    }
}

export default class Index extends Component {
    render() {
        return (
            <ScrollView style={styles.scenes}>
                <View style={styles.row}>
                    <Btn text="加载" onPress={()=>this.props.navigator.push({component: activityIndicator})}/>
                    <Btn text="侧边栏" onPress={()=>this.props.navigator.push({component: drawerLayoutAndroid})}/>
                    <Btn text="切换按钮" onPress={()=>this.props.navigator.push({component: switchButton})}/>
                    <Btn text="下拉选择" onPress={()=>this.props.navigator.push({component: picker})}/>
                    <Btn text="顶部工具栏" onPress={()=>this.props.navigator.push({component: toolbarAndroid})}/>
                    <Btn text="下拉加载" onPress={()=>this.props.navigator.push({component: refreshControl})}/>
                    <Btn text="内置浏览器" onPress={()=>this.props.navigator.push({component: webViewExample})}/>
                    <Btn text="粘贴板" onPress={()=>this.props.navigator.push({component: clipboard})}/>
                    <Btn text="日期选择器" onPress={()=>this.props.navigator.push({component: datePickerAndroid})}/>
                    <Btn text="时间选择器" onPress={()=>this.props.navigator.push({component: timePickerAndroid})}/>
                    <Btn text="模态框" onPress={()=>this.props.navigator.push({component: modal})}/>
                    <Btn text="模态框示例" onPress={()=>this.props.navigator.push({component: modalExample})}/>
                    <Btn text="滑块" onPress={()=>this.props.navigator.push({component: SlidingCompleteExample})}/>
                    <Btn text="链接" onPress={()=>this.props.navigator.push({component: linking})}/>
                    <Btn text="网络" onPress={()=>this.props.navigator.push({component: netInfoDemo})}/>

                    {/*
                     <Btn text="顶部状态栏" onPress={()=>this.props.navigator.push({component: statusBar})}/>
                    <Btn text="浏览器1" onPress={()=>this.props.navigator.push({component: webViewExample})}/>
                    <Btn text="浏览器2" onPress={()=>this.props.navigator.push({component: webView})}/>
                    <Btn text="加载1" onPress={()=>this.props.navigator.push({component: progressBarAndroid})}/>
                    */}
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    scenes: {
        flex: 1, backgroundColor: '#495A80'
    },
    row: {
        flexDirection:'row', flexWrap: 'wrap',justifyContent: 'space-around'
    },
    btn: {
        alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5, margin: 5, width: 80, height: 80
    },
    text: {
        color: '#fff', fontSize: 14, textAlign:'center'
    }
};
