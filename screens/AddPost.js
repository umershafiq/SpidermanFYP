import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity, Image } from "react-native";
import DTpicker from "../Components/DTpicker";

export default class AddPost extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
      EventName: '',
      PostDescription: '',
    };
  }
  CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.EventName != '') {
      if (this.state.PostDescription != '') {
      this.props.navigation.navigate('Profile')
      }else { alert('Please Enter Description');}
    }else { alert('Please Event Name');}
      };
    render() {
        return (
            <View style={styles.container}>
            <Text style={{ marginTop: 10, fontSize: 20, alignItems:'center', fontWeight:'700'}}>Add New Post</Text>
                  <Image
                    source={require('../images/posts.png')}
                    style={{ width: 100, height: 100, alignSelf: 'center'}}
                   />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Event Name"
                    onChangeText={EventName => this.setState({ EventName })}
                  underlineColorAndroid="transparent"
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Post description"
                    onChangeText={PostDescription => this.setState({ PostDescription })}
                  underlineColorAndroid="transparent"
                />
                <DTpicker />
                <TouchableOpacity
                    style={styles.button}
                    onPress={this.CheckTextInput}>
                    <Text style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    container: {
        flex: 1,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        maxHeight: 400
    },
    inputStyle: {
        marginTop:3,
        minHeight: 40,
        width: 360,
        backgroundColor: "white",
        padding: 20,
        alignSelf: "center",
        borderColor: "grey",
        borderWidth: 1,
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#00bfff',
        padding: 10,
        width: 150,
        marginTop: 40,
        borderRadius: 40,
    },
});
