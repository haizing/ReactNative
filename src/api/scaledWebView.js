/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {StyleSheet, Text, TextInput, TouchableWithoutFeedback, TouchableOpacity, View, WebView} from 'react-native';

var HEADER = '#3b5998';
var BGWASH = 'rgba(255,255,255,0.8)';
var DISABLED_WASH = 'rgba(255,255,255,0.25)';

var DEFAULT_URL = 'https://m.baidu.com/';


export default class Button extends React.Component {
    _handlePress = () => {
        if (this.props.enabled !== false && this.props.onPress) {
            this.props.onPress();
        }
    };

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._handlePress}>
                <View style={styles.button}>
                    <Text>{this.props.text}</Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default class scaledWebView extends React.Component {
    state = {
        scalingEnabled: true,
    };

    render() {
        return (
            <View>
                <WebView
                    style={{ backgroundColor: BGWASH, height: 400, }}
                    source={{uri: DEFAULT_URL}}
                    scalesPageToFit={this.state.scalingEnabled}
                />
                <View style={styles.buttons}>
                    { this.state.scalingEnabled ?
                        <Button
                            text="Scaling:ON"
                            enabled={true}
                            onPress={() => this.setState({scalingEnabled: false})}
                        /> :
                        <Button
                            text="Scaling:OFF"
                            enabled={true}
                            onPress={() => this.setState({scalingEnabled: true})}
                        /> }
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: HEADER,
    },
    addressBarRow: {
        flexDirection: 'row',
        padding: 8,
    },
    webView: {
        backgroundColor: BGWASH,
        height: 350,
    },
    addressBarTextInput: {
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
        borderWidth: 1,
        height: 24,
        paddingLeft: 10,
        paddingTop: 3,
        paddingBottom: 3,
        flex: 1,
        fontSize: 14,
    },
    navButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
    },
    disabledButton: {
        width: 20,
        padding: 3,
        marginRight: 3,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: DISABLED_WASH,
        borderColor: 'transparent',
        borderRadius: 3,
    },
    goButton: {
        height: 24,
        padding: 3,
        marginLeft: 8,
        alignItems: 'center',
        backgroundColor: BGWASH,
        borderColor: 'transparent',
        borderRadius: 3,
        alignSelf: 'stretch',
    },
    statusBar: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingLeft: 5,
        height: 22,
    },
    statusBarText: {
        color: 'white',
        fontSize: 13,
    },
    spinner: {
        width: 20,
        marginRight: 6,
    },
    buttons: {
        flexDirection: 'row',
        height: 30,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    button: {
        flex: 0.5,
        width: 0,
        margin: 5,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: 'gray',
    },
});
