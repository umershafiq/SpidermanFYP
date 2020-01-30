import React, { Component } from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from "react-native";

export default class RegisterEvent extends React.Component {
    render() {
        return (
                <View style={styles.container}>
                    <Image
                        source={require('../images/concert.jpg')}
                        style={{ width: 300, height: 300, alignSelf: 'center', }}
                    />
                    <Text style={styles.txt}>Venue: IU, Campus Airport</Text>
                    <Text style={styles.txt}>Date: 2-feb-2020</Text>
                    <Text style={styles.txt}>Time: 5:00pm onwards</Text>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Registration')}>
                        <Text style={styles.text}>Apply for Registration</Text>
                    </TouchableOpacity>
                </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
    },
    txt: {
        marginTop: 10,
        fontSize: 18,
        color: 'black',
        marginLeft: 5,
        marginBottom: 2
    },
    text:{
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
    button: {
        marginTop: 5,
        height: 50,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#00bfff',
        marginHorizontal: 10,
      },
});