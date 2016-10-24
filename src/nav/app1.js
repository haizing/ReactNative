/**
 * Created by xincap-47 on 2016/8/31.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, Navigator} from 'react-native';

export default class MyProject extends Component{
    render() {
        return (
            <Navigator
                initialRoute={{title: 'Nav1', index: 0}}
                renderScene={(route, navigator) =>
                    <Text>Hello {route.title}</Text>
                }
                style={{padding:10}}
            />
        );
    }
}

AppRegistry.registerComponent('MyProject', () => MyProject);