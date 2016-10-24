/**
 * Created by xincap-47 on 2016/8/31.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, Navigator, TouchableOpacity, View, Platform, ToastAndroid} from 'react-native';

const routes = [
    {title: 'Nav1', index: 0},
    {title: 'Nav2', index: 1},
    {title: 'Nav3', index: 2},
    {title: 'Nav4', index: 3}
];

export default class MyProject extends Component {
    render() {
        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.FloatFromBottom}
                renderScene={(route, navigator) =>
                    <TouchableOpacity>
                        <Text>Hello {route.title}</Text>
                    </TouchableOpacity>
                }
                onWillFocus={(route, navigator)=>ToastAndroid.show('将要加载 '+route.title, ToastAndroid.SHORT)}
                onDidFocus={(route, navigator)=>ToastAndroid.show('加载完成 '+route.title, ToastAndroid.SHORT)}
                navigationBar={
                     <Navigator.NavigationBar
                       style={styles.nav}
                       routeMapper={{
                         LeftButton: (route, navigator, index, navState) =>
                          {
                            if (route.index === 0) {
                              return null;
                            } else {
                              return (
                                <TouchableOpacity onPress={() => navigator.pop()}
                                   style={styles.navItem}>
                                    <Text style={styles.navText}>&lt; 返回</Text>
                                </TouchableOpacity>
                              );
                            }
                          },
                         RightButton: (route, navigator, index, navState) =>
                           {
                               if (index === routes.length-1) {
                                  return null;
                                } else {
                                  return (
                                    <TouchableOpacity style={styles.navItem} onPress={() => navigator.push(routes[index+1])}>
                                        <Text  style={styles.navText}>下一页</Text>
                                    </TouchableOpacity>
                                  );
                                }
                           },
                         Title: (route, navigator, index, navState) =>
                           {
                                return (
                                <View style={styles.navItem}>
                                    <Text  style={styles.navText}>{route.title}</Text>
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
    nav: {
        backgroundColor:'#495A80'
    },
    navItem: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    navText: {
        color:'#fff', fontSize: 18
    }
}

AppRegistry.registerComponent('MyProject', () => MyProject);