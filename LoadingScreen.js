import { React, Component } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import firebase from "firebase";

export default class LoadingScreen extends Component {
    componentDidMount(){
        this.checkIfLoggedIn();
    }
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged (
            function(user) {
            if (user) {
                this.props.navigation.navigate('Home');
            }
            else {
                this.props.navigation.navigate('SignInScreen');
            }
    }.bind(this)
    )};
    render() {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large' />
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