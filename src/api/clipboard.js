/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, Clipboard, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class clipboard extends Component {
    state = {
        content: '粘贴内容在这里'
    };

    _setClipboardContent = async () => {
        Clipboard.setString('Hello World');
        try {
            var content = await Clipboard.getString();
            this.setState({content});
            ToastAndroid.show('Hello World 粘贴成功', ToastAndroid.SHORT);
        } catch (e) {
            this.setState({content:e.message});
        }
    };

    _getClipboardContent = async () => {
        var content = await Clipboard.getString();
        ToastAndroid.show(content, ToastAndroid.SHORT);
    };

    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>粘贴板</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <View>
                    <Text onPress={this._setClipboardContent} style={{color: 'blue'}}>
                        点击把 "Hello World" 放进粘贴板
                    </Text>
                    <Text style={{color: 'red', marginTop: 20}}>
                        {this.state.content}
                    </Text>
                    <Text onPress={this._getClipboardContent}>
                        获取粘贴板内容
                    </Text>
                </View>
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
    textl: {
        color: '#fff', fontSize: 14, textAlign:'left'
    }
};

