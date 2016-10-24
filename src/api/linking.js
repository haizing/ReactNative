/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, Linking, View, ToastAndroid, TouchableOpacity} from 'react-native';

class OpenURLButton extends React.Component {
    static propTypes = {
        url: React.PropTypes.string,
    };

    handleClick = () => {
        Linking.canOpenURL(this.props.url).then(supported => {
            if (supported) {
                Linking.openURL(this.props.url);
            } else {
                console.log('Don\'t know how to open URI: ' + this.props.url);
            }
        });
    };

    render() {
        return (
            <TouchableOpacity
                onPress={this.handleClick}>
                <View style={styles.button}>
                    <Text style={styles.text}>打开 {this.props.url}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}

export default class IntentAndroidExample extends React.Component {

    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>链接</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <OpenURLButton url={'https://m.baidu.com'} />
                <OpenURLButton url={'https://m.hao123.com'} />
                <OpenURLButton url={'http://www.jianshu.com/zodiac/2015'} />
                <OpenURLButton url={'fb://notifications'} />
                <OpenURLButton url={'geo:37.484847,-122.148386'} />
                <OpenURLButton url={'tel:9876543210'} />
            </View>
        );
    }
}


const styles = {
    container: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
        paddingTop: 30,
    },
    button: {
        padding: 10,
        backgroundColor: '#3B5998',
        marginTop: 10,
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
