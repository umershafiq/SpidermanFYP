import React, { Component } from 'react';

import { StyleSheet, View, Alert, Text } from 'react-native';

export default class DTpicker extends Component {
  constructor(props) {
    super(props);
    this.state = {
      //defauilt value of the date time
      date: '',
    };
  }
  componentDidMount() {
    var that = this;

    var date = new Date().getDate(); //Current Date
    var month = new Date().getMonth() + 1; //Current Month
    var year = new Date().getFullYear(); //Current Year
    var hours = new Date().getHours(); //Current Hours
    var min = new Date().getMinutes(); //Current Minutes
    var sec = new Date().getSeconds(); //Current Seconds

    that.setState({
      //Setting the value of the date time
      date:
        date + '/' + month + '/' + year,
    });
    that.setState({
      time:
        hours + ':' + min + ':' + sec,
    });
  }

  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text
          style={{
            color:'gray',
            fontSize: 16,
            paddingRight:60,
          }}>
          Date : {this.state.date}
        </Text>
        <Text
          style={{
            color:'gray',
            fontSize: 16,
          }}>
          Time : {this.state.time}
        </Text>
      </View>
    );
  }
}