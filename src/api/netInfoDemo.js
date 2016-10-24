/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, NetInfo, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class NetInfoDemo extends Component {
    constructor(props){
        super(props);
        this.state = {
            isConnected: null,
            connectionInfo:null,
        };
    }
    componentDidMount() {
        NetInfo.isConnected.addEventListener(
            'change',
            this._handleConnectivityChange
        );
        //检测网络是否连接
        NetInfo.isConnected.fetch().done(
            (isConnected) => { this.setState({isConnected}); }
        );
        //检测网络连接信息
        NetInfo.fetch().done(
            (connectionInfo) => { this.setState({connectionInfo}); }
        );
    }
    componentWillUnmount() {
        NetInfo.isConnected.removeEventListener(
            'change',
            this._handleConnectivityChange
        );
    }
    _handleConnectivityChange(isConnected) {
        ToastAndroid.show((isConnected ? 'online' : 'offline'),ToastAndroid.SHORT);
    }
    render() {
        return (
            <View >
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>网络</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <Text style={styles.welcome}>
                    网络状态
                </Text>
                <Text style={styles.welcome}>
                    {this.state.isConnected ? '在线' : '离线'}
                </Text>
                <Text style={styles.welcome}>
                    连接类型
                </Text>
                <Text style={styles.welcome}>
                    {this.state.connectionInfo}
                </Text>
                <Text style={styles.welcome}>
                    是否计费
                </Text>
                <Text style={styles.welcome}>
                    {NetInfo.isConnectionExpensive === true ? '需要' : '不需要'}
                </Text>
            </View>
        );
    }
}

const styles = {
    welcome: {
        fontSize: 16,
        textAlign: 'left',
        margin: 10,
    },
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
