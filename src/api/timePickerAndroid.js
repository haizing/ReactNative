/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, TimePickerAndroid , View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class timePickerAndroid extends React.Component {

    state = {
        isoFormatText: '选择时间, (24-小时格式)',
        presetHour: 4,
        presetMinute: 4,
        presetText: '选择时间, 默认: 4:04AM'
    };

    showPicker = async (stateKey, options) => {
        try {
            const {action, minute, hour} = await TimePickerAndroid.open(options);
            var newState = {};
            if (action === TimePickerAndroid.timeSetAction) {
                newState[stateKey + 'Text'] = _formatTime(hour, minute);
                newState[stateKey + 'Hour'] = hour;
                newState[stateKey + 'Minute'] = minute;
            } else if (action === TimePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    };

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
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.showPicker.bind(this, 'preset', {
                        hour: this.state.presetHour,
                        minute: this.state.presetMinute
                        })}>
                        <Text style={styles.btnText}>{this.state.presetText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.showPicker.bind(this, 'isoFormat', {
                        hour: this.state.isoFormatHour,
                        minute: this.state.isoFormatMinute,
                        is24Hour: true
                        })}>
                        <Text style={styles.btnText}>{this.state.isoFormatText}</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

/**
 * Returns e.g. '3:05'.
 */
function _formatTime(hour, minute) {
    return hour + ':' + (minute < 10 ? '0' + minute : minute);
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

