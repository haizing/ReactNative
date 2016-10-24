/**
 * Created by xincap-47 on 2016/8/23.
 */
import React from 'react';
import{
    AppRegistry,
    View,
    Navigator,
    ToastAndroid
} from 'react-native';
//引入另一个组件（页面）
import FirstPageComponent from './FirstPageComponent';

export default class MyProject extends React.Component{
    render(){
        //声明变量
        let defaultName = 'FirstPageComponent';
        let defaultComponent = FirstPageComponent;
        return(
            <Navigator
                //默认页面，app启动看到的第一屏
                initialRoute={{name:defaultName, component:defaultComponent}}
                //页面跳转动画效果
                configureScene={(route) =>{
                    return Navigator.SceneConfigs.VerticalDownSwipeJump;
                }}
                //回调路由控制（算是固定写法吧，没什么可说的）
                renderScene={(route, navigator) => {
                    let Component = route.component;
                    console.log('========================route.params=3=========================');
                    console.log(route.params);
                    return <Component {...route.params} navigator={navigator}/>
                }}/>
        );
    }
}

AppRegistry.registerComponent('MyProject', () => MyProject);