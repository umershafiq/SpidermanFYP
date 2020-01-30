import React, { Component } from 'react';
import { TextInput, Text, View, StyleSheet, TouchableOpacity } from "react-native";

export default class Registration extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text style={{ alignSelf: 'center', fontSize: 20, color: 'black', marginTop: 25 }}>Registration Form</Text>
                <TextInput style={styles.inputStyle}
                    placeholder="Enter Your Name"
                />
                <TextInput style={styles.inputStyle}
                    placeholder="Event name"
                />
                <TextInput style={styles.inputStyle}
                    placeholder="University Name"
                />
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => this.props.navigation.navigate('Home')}>
                    <Text style={styles.text}>SUBMIT</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-start',
    },
    inputStyle: {
        width: 360,
        backgroundColor: "white",
        padding: 20,
        alignSelf: "center",
        borderWidth: 0.25,
        fontSize: 18
    },
    button: {
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#00bfff',
        fontSize: 25,
        color: 'white',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});