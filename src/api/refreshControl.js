/**
 * Created by linyufeng on 2016/9/4.
 */
import React, {Component} from 'react';

import { ScrollView, RefreshControl, Text, TouchableWithoutFeedback, View, TouchableOpacity} from 'react-native';

export default class Row extends Component {

    _onClick() {
        this.props.onClick(this.props.data);
    }

    render() {
        return (
            <TouchableWithoutFeedback onPress={this._onClick.bind(this)}>
                <View style={styles.row}>
                    <Text style={styles.text}>
                        {this.props.data.text + ' (' + this.props.data.clicks + ' clicks)'}
                    </Text>
                </View>
            </TouchableWithoutFeedback>
        );
    }
}

export default class refreshControl extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(10)).map(
                (val, i) => ({text: '初始化 行 ' + i, clicks: 0}))
        }
    }

    _onClick(row) {
        row.clicks++;
        this.setState({
            rowData: this.state.rowData
        });
    }

    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} onClick={this._onClick.bind(this)}/>;
        });
        return (
            <View style={styles.view}>
                <View style={styles.nav}>
                    <TouchableOpacity style={styles.view} onPress={()=>this.props.navigator.pop()}>
                        <Text style={styles.textl}>&lt; 返回</Text>
                    </TouchableOpacity>
                    <View style={styles.view}>
                        <Text style={styles.text}>下拉加载</Text>
                    </View>
                    <View style={styles.view}></View>
                </View>
                <ScrollView
                style={styles.view}
                refreshControl={
                  <RefreshControl
                    refreshing={this.state.isRefreshing}
                    onRefresh={this._onRefresh.bind(this)}
                    tintColor="#ff0000"
                    title="加载中..."
                    titleColor="#00ff00"
                    colors={['#ff0000', '#00ff00', '#0000ff']}
                    progressBackgroundColor="#ffff00"
                  />
                }>
                    {rows}
                </ScrollView>
            </View>
        );
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // prepend 10 items
            const rowData = Array.from(new Array(10))
                .map((val, i) => ({
                    text: '加载 行 ' + (+this.state.loaded + i),
                    clicks: 0
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 10,
                isRefreshing: false,
                rowData: rowData
            });
        }, 2000);
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
        color: '#fff', fontSize: 14, textAlign:'center'
    },
    textl: {
        color: '#fff', fontSize: 14, textAlign:'left'
    },
    row: {
        borderColor: 'grey',
        borderWidth: 1,
        padding: 20,
        backgroundColor: '#495A80',
        margin: 5
    }
};