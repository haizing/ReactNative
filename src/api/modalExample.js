/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {StyleSheet, Switch, Text, Modal, View, ToastAndroid, TouchableOpacity} from 'react-native';

class Button extends React.Component {
    state = {
        active: false,
    };

    _onHighlight = () => {
        this.setState({active: true});
    };

    _onUnhighlight = () => {
        this.setState({active: false});
    };

    render() {
        var colorStyle = {
            color: this.state.active ? '#fff' : '#000',
        };
        return (
            <TouchableOpacity
                onHideUnderlay={this._onUnhighlight}
                onPress={this.props.onPress}
                onShowUnderlay={this._onHighlight}
                style={[styles.button, this.props.style]}
                underlayColor="#a9d9d4">
                <Text style={[styles.buttonText, colorStyle]}>{this.props.children}</Text>
            </TouchableOpacity>
        );
    }
}

export default class modalExample extends React.Component {
    state = {
        animationType: 'none',
        modalVisible: false,
        transparent: false,
    };

    _setModalVisible = (visible) => {
        this.setState({modalVisible: visible});
    };

    _setAnimationType = (type) => {
        this.setState({animationType: type});
    };

    _toggleTransparent = () => {
        this.setState({transparent: !this.state.transparent});
    };

    render() {
        var modalBackgroundStyle = {
            backgroundColor: this.state.transparent ? 'rgba(0, 0, 0, 0.5)' : '#f5fcff',
        };
        var innerContainerTransparentStyle = this.state.transparent
            ? {backgroundColor: '#fff', padding: 20}
            : null;
        var activeButtonStyle = {
            backgroundColor: '#ddd'
        };

        return (
            <View>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>模态框</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <Modal
                    animationType={this.state.animationType}
                    transparent={this.state.transparent}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {this._setModalVisible(false)}}>
                    <View style={[styles.container, modalBackgroundStyle]}>
                        <View style={[styles.innerContainer, innerContainerTransparentStyle]}>
                            <Text>模态框显示 {this.state.animationType === 'none' ? '无' : '有'} 动画.</Text>
                            <Button
                                onPress={this._setModalVisible.bind(this, false)}
                                style={styles.modalButton}>
                                关闭
                            </Button>
                        </View>
                    </View>
                </Modal>
                <View style={styles.row}>
                    <Text style={styles.rowTitle}>动画类型</Text>
                    <Button onPress={this._setAnimationType.bind(this, 'none')} style={this.state.animationType === 'none' ? activeButtonStyle : {}}>
                        无
                    </Button>
                    <Button onPress={this._setAnimationType.bind(this, 'slide')} style={this.state.animationType === 'slide' ? activeButtonStyle : {}}>
                        滑动
                    </Button>
                    <Button onPress={this._setAnimationType.bind(this, 'fade')} style={this.state.animationType === 'fade' ? activeButtonStyle : {}}>
                        淡入
                    </Button>
                </View>

                <View style={styles.row}>
                    <Text style={styles.rowTitle}>是否透明</Text>
                    <Switch value={this.state.transparent} onValueChange={this._toggleTransparent} />
                </View>

                <Button onPress={this._setModalVisible.bind(this, true)}>
                    显示
                </Button>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    innerContainer: {
        borderRadius: 10,
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 20
    },
    rowTitle: {
        flex: 1,
    },
    button: {
        borderRadius: 5,
        flex: 1,
        height: 44,
        alignSelf: 'stretch',
        justifyContent: 'center',
        overflow: 'hidden',
    },
    buttonText: {
        fontSize: 18,
        margin: 5,
        textAlign: 'center',
    },
    modalButton: {
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
});