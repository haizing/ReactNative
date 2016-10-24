/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, StatusBar , View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class statusBar extends React.Component {


    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>时间选择器</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />
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
        color: '#fff', fontSize: 14, textAlign: 'center'
    },
    btnText: {
        color: '#495A80', fontSize: 14, textAlign: 'center'
    },
    textl: {
        color: '#fff', fontSize: 14, textAlign: 'left'
    },
    btn: {
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#495A80',
        borderRadius: 5,
        margin: 5,
        padding: 10
    }
};

