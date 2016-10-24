/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class registerSecond extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: null
        }
    }

    componentDidMount() {
        this.setState({
            name: this.props.name
        });
    }

    //设置密码
    _setPassword() {
        const {navigator} = this.props;
        this.props.setPassword('123456');
        ToastAndroid.show('设置成功', ToastAndroid.SHORT);
    }

    //返回
    _pop() {
        const {navigator} = this.props;
        navigator.pop();
    }

    render() {
        return (
            <View style={styles.scenes}>
                <View style={styles.navGroup}>
                    <TouchableOpacity style={styles.scenes} onPress={this._pop.bind(this)}>
                        <Text style={styles.title}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.scenes}>
                        <Text style={styles.title}>初始化密码</Text>
                    </View>
                    <View style={styles.scenes}></View>
                </View>
                <Text>注册用户名为：{this.state.name}</Text>
                <TouchableOpacity style={styles.btn} onPress={this._setPassword.bind(this)}>
                    <Text style={styles.text}>设置初始密码</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = {
    navGroup: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#495A80',
        height: 60,
        paddingHorizontal: 5
    },
    title: {
        color: '#fff', fontSize: 16
    },
    text: {
        color: '#495A80', fontSize: 14, textAlign: 'center'
    },
    scenes: {
        flex: 1
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
