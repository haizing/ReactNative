/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, DatePickerAndroid , View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class datePickerAndroid extends Component {
    state = {
        presetDate: new Date(2020, 4, 5),
        allDate: new Date(2020, 4, 5),
        simpleText: '日期选择器',
        minText: '今天 之前',
        maxText: '今天 之后',
        presetText: '选择 2020/5/5',
        allText: '2020/5/1 和 2020/5/10 之间'
    };

    showPicker = async (stateKey, options) => {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ( {code, message}){
            console.warn(`Error in example '${stateKey}': `, message);
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
                        <Text style={styles.text}>日期选择器</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}>
                        <Text style={styles.btnText}>{this.state.simpleText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}>
                        <Text style={styles.btnText}>{this.state.presetText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.showPicker.bind(this, 'min', {
                          date: this.state.minDate,
                          minDate: new Date()
                        })}>
                        <Text style={styles.btnText}>{this.state.minText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.showPicker.bind(this, 'max', {
                          date: this.state.maxDate,
                          maxDate: new Date()
                        })}>
                        <Text style={styles.btnText}>{this.state.maxText}</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.btn}
                        onPress={this.showPicker.bind(this, 'all', {
                          date: this.state.allDate,
                          minDate: new Date(2020, 4, 1),
                          maxDate: new Date(2020, 4, 10)
                        })}>
                        <Text style={styles.btnText}>{this.state.allText}</Text>
                    </TouchableOpacity>
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

