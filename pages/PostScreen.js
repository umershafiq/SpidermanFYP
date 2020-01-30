import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, View } from "native-base";
import { ScrollView } from "react-native-gesture-handler";

export default class PostScreen extends React.Component {
  render() {
    return (
      <ScrollView>
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ marginTop: 20, fontSize: 25, fontWeight: '700' }}>Posts Highlight</Text>
        <Layout
        name="Book Fair"/>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AddPost')}>
          <Text style={styles.text}>Add new post</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
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
  },
}
)