/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {Text, Modal, View, ToastAndroid, TouchableOpacity} from 'react-native';

export default class modal extends Component {
    constructor(props) {
        super(props);
        this.state = {modalVisible: false};
    }

    setModalVisible(visible) {
        this.setState({modalVisible: visible});
    }

    render() {
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
                    animationType={"slide"}
                    transparent={false}
                    visible={this.state.modalVisible}
                    onRequestClose={() => {ToastAndroid.show("Modal has been closed.", ToastAndroid.SHORT)}}>
                    <View style={{marginTop: 22}}>
                        <View>
                            <Text style={{textAlign: 'center'}}>Hello World!</Text>
                            <TouchableOpacity onPress={() => {
                              this.setModalVisible(!this.state.modalVisible)
                            }}>
                                <Text style={{textAlign: 'center'}}>关闭</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </Modal>

                <TouchableOpacity onPress={() => {
                  this.setModalVisible(true)
                }}>
                    <Text style={{textAlign: 'center'}}>显示模态框</Text>
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
    textl: {
        color: '#fff', fontSize: 14, textAlign: 'left'
    }
};

