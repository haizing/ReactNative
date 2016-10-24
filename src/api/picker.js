/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, Picker, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class picker extends Component {
    constructor(props) {
        super(props);
        this.state = {
            language: null
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
                        <Text style={styles.text}>下拉选择</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <Picker
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Picker
                    enabled={false}
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Picker
                    mode="dialog"
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Picker
                    mode="dropdown"
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Picker
                    prompt="请选择编程语言"
                    mode="dialog"
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
                <Picker
                    prompt="请选择编程语言"
                    mode="dropdown"
                    selectedValue={this.state.language}
                    onValueChange={(lang) => this.setState({language: lang})}>
                    <Picker.Item label="Java" value="java" />
                    <Picker.Item label="JavaScript" value="js" />
                </Picker>
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

