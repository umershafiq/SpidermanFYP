import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

export default class PostLayout extends Component {
  render() {
    return (
      <View
        style={{
          height: 200,
          width: null,
          marginLeft: 20,
          marginRight:20,
          borderWidth: 0.5,
          marginBottom:10
        }}>
        <View style={{ flex: 2 }}>
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}