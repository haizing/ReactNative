/**
 * Created by xincap-47 on 2016/8/23.
 */
import React from 'react';
import {
    View,
    Text,
    Navigator,
    TouchableOpacity
} from 'react-native';

import SecondPageComponent from './SecondPageComponent';

export default class FirstPageComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:1
        };

    }
    _pressButton() {
        let _this = this;
        const { navigator } = this.props;
        console.log('==================this.props=1=================');
        console.log(this.props);
        //为什么这里可以取得 props.navigator?请看上文:
        //<Component {...route.params} navigator={navigator} />
        //这里传递了navigator作为props
        if(navigator) {
            navigator.push({
                name: 'SecondPageComponent',
                component: SecondPageComponent,
                params:{
                    id:this.state.id,
                    getUser:(user)=>{
                        _this.setState({
                            user:user
                        })
                    }
                }
            })
        }
    }
    render() {
        if( this.state.user ) {
            return(
                <View>
                    <Text>用户信息: { JSON.stringify(this.state.user) }</Text>
                </View>
            );
        }else {
            return(
                <View>
                    <TouchableOpacity onPress={this._pressButton.bind(this)}>
                        <Text>查询ID为{ this.state.id }的用户信息</Text>
                    </TouchableOpacity>
                </View>
            );
        }
    }
}