import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
export default class SignInScreen extends React.Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Image
                        source={require('../images/logo.png')}
                        style={{ width: 300, height: 300, alignSelf: 'center', marginTop:20}} />
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Login')}>
                        <Text style={styles.text}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.button}
                        onPress={() => this.props.navigation.navigate('Signup')}>
                        <Text style={styles.text}>Hi</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView >
        );
    }
}
const styles = StyleSheet.create({
    header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',

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
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'flex-end',
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
});