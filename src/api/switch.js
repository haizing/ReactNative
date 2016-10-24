/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, Switch, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class switchButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            v1: false,
            v2: true
        }
    }
    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>切换按钮</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <Switch value={this.state.v1} onValueChange={()=>{this.setState({v1: !this.state.v1})}}/>
                <Switch value={this.state.v2} onValueChange={()=>{this.setState({v2: !this.state.v2})}}/>
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

