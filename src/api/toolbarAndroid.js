/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, ToolbarAndroid, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class toolbarAndroid extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null
        }
    }

    render() {
        return (
            <ToolbarAndroid
                style={{backgroundColor: '#495A80',height: 60, paddingVertical: 10}}
                navIcon={require('../../res/img/meau.png')}
                title="主标题"
                titleColor="#fff"
                subtitle="副标题"
                subtitleColor="#fff"
                actions={[
                    {title: 'Send', icon: require('../../res/img/send.png'), show: 'always'},
                    {title: 'Settings', icon: require('../../res/img/set.png'), show: 'always'}
                ]}
                onActionSelected={(position)=>{
                    if (position === 0) {
                        this.props.navigator.pop();
                    }
            }}/>
        )
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
    textl: {
        color: '#fff', fontSize: 14, textAlign: 'left'
    }
};

