/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, DrawerLayoutAndroid, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class drawerLayoutAndroid extends Component {

    render() {
        let navigationView = (
            <View style={styles.navLeft}>
                <Text style={styles.textf}>设置</Text>
                <Text style={styles.textf}>游戏</Text>
                <Text style={styles.textf}>新闻</Text>
                <Text style={styles.textf}>应用</Text>
            </View>
        );
        return (
            <View style={styles.view}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>侧边栏布局</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <DrawerLayoutAndroid
                    drawerWidth={200}
                    drawerPosition={DrawerLayoutAndroid.positions.Left}
                    renderNavigationView={() => navigationView}
                    style={styles.view}>
                    <Text style={styles.textf}>Hello</Text>
                    <Text style={styles.textf}>World!</Text>
                </DrawerLayoutAndroid>
            </View>
        );
    }
}

const styles = {
    nav: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#495A80',
        height: 60,
        paddingHorizontal: 5
    },
    view: {
        flex: 1
    },
    text: {
        color: '#fff', fontSize: 14, textAlign:'center'
    },
    navLeft: {
        flex: 1, backgroundColor: '#fff'
    },
    textf: {
        margin: 10, fontSize: 15, textAlign: 'center', color:'#495A80'
    },
    textl: {
        color: '#fff', fontSize: 14, textAlign:'left'
    }
};

