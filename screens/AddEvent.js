import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity, Image, ScrollView, SafeAreaView } from "react-native";
import DTpicker from "../Components/DTpicker";
export default class AddEvent extends React.Component {
        constructor(props) {
    super(props);
    this.state = {
      EventName: '',
      Venue:'',
      EventDescription: '',
    };
  }
  CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.EventName != '') {
      if (this.state.Venue != '') {
        if (this.state.EventDescription != '') {
      this.props.navigation.navigate('Profile')
    }else {alert ('Enter Description');}
        }else { alert('Please Enter Venue');}
         }else { alert('Please Event Name');}
      };
    render() {
        return (
            <ScrollView style={styles.viewing}>
                <SafeAreaView style={{ flex: 1 }}>
                    <View style={styles.container}>
                    <Text style={{ marginTop: 10, fontSize: 20, alignItems:'center', fontWeight:'700'}}>Add New Event</Text>
                        <Image
                            source={require('../images/event.png')}
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
                            placeholder="Venue"
                            onChangeText={Venue => this.setState({ Venue })}
                  underlineColorAndroid="transparent"
                        />
                        <TextInput
                            style={styles.inputStyle}
                            placeholder="Event description"
                            onChangeText={EventDescription => this.setState({ EventDescription })}
                  underlineColorAndroid="transparent"
                        />
                        <Text
                            style={{
                                fontSize: 18,
                                fontWeight: "700",
                                paddingHorizontal: 20
                            }}>
                        </Text>
                        <DTpicker/>
                        <TouchableOpacity
                    style={styles.button}
                    onPress={this.CheckTextInput}>
                    <Text style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>
                    </View>
                </SafeAreaView>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
        text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    button:{
        height: 50,
        marginTop: 10,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#00bfff',
    },
    viewing: {
        backgroundColor: 'white',
      },
    container: {
        flex: 1,
        backgroundColor: 'white',
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    inputStyle: {
        minHeight: 40,
        width: 360,
        backgroundColor: "white",
        //margin: 2,
        padding: 20,
        alignSelf: "center",
        borderColor: "grey",
        borderWidth: 1,
    },
    header: {
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',

    },
});
