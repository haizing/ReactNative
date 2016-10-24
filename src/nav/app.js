/**
 * Created by xincap-47 on 2016/8/31.
 * ::1 - - [01/Sep/2016:02:22:37 +0000] "GET /favicon.ico HTTP/1.1" 404 24 "-" "Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/45.0.2454.101 Safari/537.36"
 */
import React, {Component} from 'react';
import {AppRegistry, Text, Navigator, TouchableOpacity, View, Platform, ToastAndroid, TouchableHighlight, ScrollView } from 'react-native';

const routes = [
    {title: 'Nav0', index: 0},
    {title: 'Nav1', index: 1},
    {title: 'Nav2', index: 2},
    {title: 'Nav3', index: 3}
];
const nextRoutes = [
    {title: '导航0', index: 0},
    {title: '导航1', index: 1},
    {title: '导航2', index: 2},
    {title: '导航3', index: 3}
];

export default class MyProject extends Component {

    constructor(props) {
        super(props);
        this.state = {
            currentRoutes:null
        }
    }
    //设置路由
    _immediatelyResetRouteStack(nextRoutes, navigator){
        navigator.immediatelyResetRouteStack(nextRoutes);
        ToastAndroid.show('切换路由完成', ToastAndroid.SHORT);
    }
    //路由跳转
    _jumpTo(index, navigator){
        let currentRoute = navigator.getCurrentRoutes();
        if(index > currentRoute.length-1){
            ToastAndroid.show('页面不存在', ToastAndroid.SHORT);
            return;
        }
        navigator.jumpTo(currentRoute[index]);
    }
    //上一页
    _jumpBack(route, navigator){
        if(route.index === 0){
            ToastAndroid.show('已经是第一页', ToastAndroid.SHORT);
            return null;
        }
        navigator.jumpBack(0);
    }
    //下一页
    _jumpForward(route, navigator){
        let currentRoute = navigator.getCurrentRoutes();
        if(route.index === currentRoute.length-1){
            ToastAndroid.show('已经是最后一页', ToastAndroid.SHORT);
            return null;
        }
        navigator.jumpForward(0);
    }
    //添加一页
    _push(navigator){
        let currentRoute = navigator.getCurrentRoutes();
        let index = currentRoute.length;
        let scenes = {title: '新增导航'+index, index: index};
        navigator.push(scenes);
        ToastAndroid.show('添加完成', ToastAndroid.SHORT);
    }
    //删除本页
    _pop(navigator){
        navigator.pop();
        ToastAndroid.show('删除完成', ToastAndroid.SHORT);
    }
    //删除指定页
    _popN(index, navigator){
        navigator.popN(index);
        ToastAndroid.show('删除指定页完成', ToastAndroid.SHORT);
    }
    //仅保留首页
    _popToTop(navigator){
        navigator.popToTop();
        ToastAndroid.show('保留首页完成', ToastAndroid.SHORT);
    }
    //删除当前页之后的页面
    _popToRoute(route, navigator){
        navigator.popToRoute(route);
        ToastAndroid.show('popToRoute', ToastAndroid.SHORT);
    }
    //替换指定页面
    _replaceAtIndex(route, navigator, index){
        navigator.replaceAtIndex(route, index, ()=>ToastAndroid.show('替换首页完成', ToastAndroid.SHORT));
    }
    //替换当前页面
    _replace(route, navigator){
        navigator.replace(route);
        ToastAndroid.show('替换当前页完成', ToastAndroid.SHORT);
    }
    //替换上一个页面
    _replacePrevious(route, navigator){
        navigator.replacePrevious(route);
        ToastAndroid.show('替换上一页完成', ToastAndroid.SHORT);
    }
    //替换上一个页面并删除本页
    _replacePreviousAndPop(route, navigator){
        navigator.replacePreviousAndPop(route);
        ToastAndroid.show('替换删除成功', ToastAndroid.SHORT);
    }
    //重置路由，只留首页
    _resetTo(route, navigator){
        navigator.resetTo(route);
        ToastAndroid.show('重置成功', ToastAndroid.SHORT);
    }
    //获取当前路由栈
    _getCurrentRoutes(navigator){
        let _currentRoutes = navigator.getCurrentRoutes();
        this.setState({currentRoutes:_currentRoutes});
        //ToastAndroid.show(JSON.stringify(_currentRoutes), ToastAndroid.SHORT);
    }
    render() {
        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                renderScene={(route, navigator) =>
                    <View style={styles.scenes}>
                        <View style={styles.scenes}>
                            <Text>
                                Hello {route.title}{'\n'}{'\n'}
                                当前路由 {JSON.stringify(route)}{'\n'}
                                当前路由栈{'\n'}
                                {JSON.stringify(navigator.getCurrentRoutes(0))}{'\n'}
                            </Text>
                            <Text style={styles.routeBg}>
                                内存路由栈{'\n'}
                                {JSON.stringify(this.state.currentRoutes)}
                            </Text>
                        </View>
                        <ScrollView style={styles.bg}>
                            <View style={styles.btnGroup}>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._getCurrentRoutes(navigator)}>
                                    <Text style={styles.text}>获取当前路由栈</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.btnGroup}>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._immediatelyResetRouteStack(nextRoutes, navigator)}>
                                    <Text style={styles.text}>切换 导航</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._immediatelyResetRouteStack(routes, navigator)}>
                                    <Text style={styles.text}>重置 Nav</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.btnGroup}>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._jumpBack(route, navigator)}>
                                    <Text style={styles.text}>上一页</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._jumpTo(2, navigator)}>
                                    <Text style={styles.text}>跳转 Nav(导航)2</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._jumpForward(route, navigator)}>
                                    <Text style={styles.text}>下一页</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.btnGroup}>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._push(navigator)}>
                                    <Text style={styles.text}>+ 添加一页</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._popN(2, navigator)}>
                                    <Text style={styles.text}>删除 Nav(导航)2</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._pop(navigator)}>
                                    <Text style={styles.text}>- 删除本页</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.btnGroup}>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._popToTop(navigator)}>
                                    <Text style={styles.text}>删除 仅留首页</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._resetTo({title: '重置路由 仅留新首页', index: 0}, navigator)}>
                                    <Text style={styles.text}>重置 仅留新首页</Text>
                                </TouchableHighlight>
                               { /*没卵用
                                <TouchableHighlight style={styles.btn} onPress={()=>this._popToRoute({title: '删除 本页之后'+route.index, index: route.index}, navigator)}>
                                    <Text style={styles.text}>删除 本页之后</Text>
                                </TouchableHighlight>*/}
                            </View>
                            <View style={styles.btnGroup}>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._replacePreviousAndPop({title: '替换上一页 删除本页'+(route.index-1), index: (route.index-1)}, navigator)}>
                                    <Text style={styles.text}>替换上一页 删除本页</Text>
                                </TouchableHighlight>
                            </View>
                            <View style={styles.btnGroup}>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._replace({title: '替换 当前导航'+route.index, index: route.index}, navigator)}>
                                    <Text style={styles.text}>替换 当前页</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._replaceAtIndex({title: '替换 指定导航(首页)0', index: 0}, navigator, 0)}>
                                    <Text style={styles.text}>替换 指定页</Text>
                                </TouchableHighlight>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._replacePrevious({title: '替换 上一页导航'+(route.index-1), index: (route.index-1)}, navigator)}>
                                    <Text style={styles.text}>替换 上一页</Text>
                                </TouchableHighlight>
                            </View>
                            {/*<View style={styles.btnGroup}>
                                <TouchableHighlight style={styles.btn} onPress={()=>this._resetTo({title: '重置路由 仅留新首页', index: 0}, navigator)}>
                                    <Text style={styles.text}>重置路由 仅留新首页</Text>
                                </TouchableHighlight>
                            </View>*/}
                        </ScrollView>
                    </View>
                }
                onWillFocus={(route, navigator)=>ToastAndroid.show('将要加载 '+route.title, ToastAndroid.SHORT)}
                onDidFocus={(route, navigator)=>ToastAndroid.show('加载完成 '+route.title, ToastAndroid.SHORT)}
                navigationBar={
                     <Navigator.NavigationBar
                       style={styles.bg}
                       routeMapper={{
                         LeftButton: (route, navigator, index, navState) =>
                          {
                            if (index === 0) {
                              return null;
                            } else {
                              return (
                                <TouchableOpacity style={styles.item} onPress={() => navigator.jumpBack(0)}>
                                    <Text style={styles.text}>&lt; 返回</Text>
                                </TouchableOpacity>
                              );
                            }
                          },
                         RightButton: (route, navigator, index, navState) =>
                           {
                               let currentRoute = navigator.getCurrentRoutes(0);
                               if (index === currentRoute.length-1) {
                                  return null;
                                } else {
                                  return (
                                    <TouchableOpacity style={styles.item} onPress={() => navigator.jumpForward(0)}>
                                        <Text style={styles.text}>下一页</Text>
                                    </TouchableOpacity>
                                  );
                                }
                           },
                         Title: (route, navigator, index, navState) =>
                           {
                                return (
                                <View style={styles.item}>
                                    <Text  style={styles.text}>{route.title}</Text>
                                </View>);
                           }
                       }}
                     />
                  }
                sceneStyle={{paddingTop: (Platform.OS === 'android' ? 66 : 74)}}
            />
        );
    }
}

const styles = {
    bg: {
        backgroundColor: '#495A80'
    },
    routeBg: {
        backgroundColor: 'rgba(73,90,128,0.3)'
    },
    item: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    text: {
        color: '#fff', fontSize: 14, textAlign:'center'
    },
    scenes: {
        flex: 1,justifyContent: 'space-between'
    },
    btnGroup: {
        flex: 1, flexDirection:'row'
    },
    btn: {
        flex: 1, alignItems: 'center', justifyContent: 'center', borderWidth: 1, borderColor: '#fff', borderRadius: 5, margin: 5, paddingVertical: 5
    }
};

AppRegistry.registerComponent('MyProject', () => MyProject);