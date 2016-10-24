/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';
import {AppRegistry, Navigator} from 'react-native';
import Index from './index';

const defaultRoute = {component: Index, sceneConfigs: null};

export default class MyProject extends Component {
    render() {
        return (
            <Navigator
                initialRoute={defaultRoute}
                configureScene={(route, routeStack) => {
                    if(route.sceneConfigs){
                        return route.sceneConfigs;
                    }else{
                        return Navigator.SceneConfigs.HorizontalSwipeJump;
                    }
                } }
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    return (
                        <Component {...route.params} navigator={navigator} />
                    );
                  }
                }
            />
        );
    }
}

AppRegistry.registerComponent('MyProject', () => MyProject);