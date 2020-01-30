import React from "react";
import { FlatList,TouchableOpacity,StyleSheet } from "react-native";
import { Text, Button, ListItem, Left, Body, Icon, Right, View } from "native-base";

export default class PostsFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "Maju Event query", header: false},
        { name: "Book Fair", header: false },
        { name: "Pet Show", header: false },
        { name: "Movie Time", header: false }
      ],
      stickyHeaderIndices: []
    };
  }
  UNSAFE_componentWillMount() {
    var arr = [];
    this.state.data.map(obj => {
      if (obj.header) {
        arr.push(this.state.data.indexOf(obj));
      }
    });
    arr.push(0);
    this.setState({
      stickyHeaderIndices: arr
    });
  }
  renderItem = ({ item }) => {
    if (item.header) {
      return (
        <ListItem itemDivider>
          <Left />
          <Body style={{ marginRight: 40 }}>
            <Text style={{ fontWeight: "bold" }}>
              {item.name}
            </Text>
          </Body>
          <Right/>
        </ListItem>
        
      );
    } else if (!item.header) {
      return (
        <View>
          <ListItem style={{ marginLeft: 0 }}>
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </ListItem>
        </View>
      );
    }
  };
  render() {
    return (
      <FlatList
        data={this.state.data}
        renderItem={this.renderItem}
        keyExtractor={item => item.name}
      />
    );
  }
}
const styles = StyleSheet.create({
  button: {
      marginTop: 5,
      height: 50,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#00bfff',
      marginHorizontal: 10,
      color:'white',
      fontWeight:'bold'
  },
}
)