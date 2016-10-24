/**
 * Created by xincap-47 on 2016/8/26.
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    ViewPagerAndroid,
    Navigator,
    Image,
}from 'react-native';

class MyProject extends Component {
    render() {
        return (
            <ViewPagerAndroid
                style={styles.background}
                initialpage={0}>
                    <View style={styles.container1}>
                        <Image source={require('../../res/img/p1.jpg')} style={styles.image}></Image>
                        <Text style={styles.welcome}>
                            医生叫我进行光合作用{'\n'}
                            不要熬夜了
                        </Text>
                    </View>
                    <View style={styles.container2}>
                        <Image source={require('../../res/img/p2.jpg')} style={styles.image}></Image>
                        <Text style={styles.welcome}>
                            人生不断向前的秘诀{'\n'}
                            就是忘记从那里来 记得到哪里去
                        </Text>
                    </View>
                    <View style={styles.container3}>
                        <Image source={require('../../res/img/p3.jpg')} style={styles.image}></Image>
                        <Text style={styles.welcome}>
                            人生路虽漫长{'\n'}
                            但是关键的就那几步
                        </Text>
                    </View>
                    <View style={styles.container1}>
                        <Image source={require('../../res/img/p1.jpg')} style={styles.image}></Image>
                        <Text style={styles.welcome}>
                            欢迎使用原点APP
                        </Text>
                    </View>
            </ViewPagerAndroid>
        );
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        backgroundColor:'#F1E9DC',
    },
    container1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'#BD7913',
    },
    container2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'#FEE920',
    },
    container3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //backgroundColor:'#A98565',
    },
    image: {
        width:300,
        height:300,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});

AppRegistry.registerComponent('MyProject', () => MyProject);