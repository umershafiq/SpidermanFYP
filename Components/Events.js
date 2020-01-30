import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";

class Events extends Component {
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
          <Image
            source={this.props.imageUri}
            style={{ flex: 1, width: null, height: null, resizeMode: "cover" }}
          />
        </View>
        <View style={{ flex: 1, paddingLeft: 10, paddingTop: 10 }}>
          <Text>{this.props.name}</Text>
        </View>
      </View>
    );
  }
}
export default Events;