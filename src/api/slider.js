/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, Slider, View, ToastAndroid, TouchableOpacity} from 'react-native';

class SliderExample extends React.Component {
    static defaultProps = {
        value: 0,
    };

    state = {
        value: this.props.value,
    };

    render() {
        return (
            <View>
                <Text style={styles.sliderText} >
                    {this.state.value && +this.state.value.toFixed(3)}
                </Text>
                <Slider
                    {...this.props}
                    onValueChange={(value) => this.setState({value: value})} />
            </View>
        );
    }
}

export default class SlidingCompleteExample extends React.Component {
    state = {
        slideCompletionValue: 0,
        slideCompletionCount: 0,
    };

    render() {
        return (
            <View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>小滑块</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <SliderExample
                    {...this.props}
                    onSlidingComplete={(value) => this.setState({
              slideCompletionValue: value,
              slideCompletionCount: this.state.slideCompletionCount + 1})} />
                <Text>
                    操作次数: {this.state.slideCompletionCount} 值: {this.state.slideCompletionValue}
                </Text>
            </View>
        );
    }
}

const styles = {
    slider: {
        height: 10,
        margin: 10,
    },
    sliderText: {
        fontSize: 14,
        textAlign: 'center',
        fontWeight: '500',
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
