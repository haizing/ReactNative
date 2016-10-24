/**
 * Created by xincap-47 on 2016/8/31.
 */
import React, {Component} from 'react';
import {AppRegistry, Text, Navigator, TouchableHighlight} from 'react-native';

export default class MyProject extends Component{
    render() {

        const routes = [
            {title: 'Nav1', index: 0},
            {title: 'Nav2', index: 1}
        ]

        return (
            <Navigator
                initialRoute={routes[0]}
                initialRouteStack={routes}
                renderScene={(route, navigator) =>
                <TouchableHighlight onPress={()=>{
                    if(route.index === 0){
                        navigator.push(routes[1]);
                    } else {
                        navigator.pop();
                    }
                }}
                underlayColor='rgba(0,0,255,0.3)'
                >
                <Text>Hello {route.title}</Text>
                </TouchableHighlight>
                }
                style={{padding:10}}
            />
        );
    }
}

AppRegistry.registerComponent('MyProject', () => MyProject);