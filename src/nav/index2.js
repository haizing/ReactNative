/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import registerFirst from './registerFirst';

const defaultRoute = {component: registerFirst};

export default class MyProject extends Component {
    render() {
        return (
            <Navigator
                initialRoute={defaultRoute}
                configureScene={(route, routeStack) => Navigator.SceneConfigs.HorizontalSwipeJump }
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    let params = {a:1, b:2};
                    return (
                        <Component {...params} navigator={navigator} />
                    );
                    等同于
                    return (
                        <Component a={1} b={2} navigator={navigator} />
                    );
                  }
                }
            />
        );
    }
}

AppRegistry.registerComponent('MyProject', () => MyProject);