/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, ProgressBarAndroid, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class progressBarAndroid extends Component {

    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>加载</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <ProgressBarAndroid styleAttr="Inverse" />
                <ProgressBarAndroid styleAttr="Inverse" color="#495A80"/>
                <ProgressBarAndroid styleAttr="Horizontal" color="#495A80"/>

                <ProgressBarAndroid styleAttr="Small" color="#495A80"/>
                <ProgressBarAndroid styleAttr="Large" color="#495A80"/>
                <ProgressBarAndroid styleAttr="SmallInverse" color="#495A80"/>
                <ProgressBarAndroid styleAttr="LargeInverse" color="#495A80"/>

                <ProgressBarAndroid styleAttr="Horizontal" color="#495A80" progress={0}/>
                <ProgressBarAndroid styleAttr="Large" color="#495A80" progress={0}/>
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

