import React from "react";
import { FlatList } from "react-native";
import { Text, ListItem, Left, Body, Icon, Right, Title } from "native-base";
export default class EventsFeed extends React.Component {
  constructor() {
    super();
    this.state = {
      data: [
        { name: "IU Voice Concert 2020", header: false },
        { name: "MAJU holi event", header: false },
        { name: "FAST-NU Ted Talks", header: false }
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
          <Right />
        </ListItem>
      );
    } else if (!item.header) {
      return (
        <ListItem style={{ marginLeft: 0 }}>
          <Body>
            <Text
              onPress={() => this.props.navigation.navigate('Register')}
            >{item.name}</Text>
          </Body>
        </ListItem>
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