import { React, Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
//import firebase from "firebase";

export default class LoadingScreen extends Component {
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
                <Text >Touch me</Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});