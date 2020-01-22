import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as firebase from 'firebase';
import { Container, Content, Header, Form, Input, Item, Button, Label } from 'native-base';

const firebaseConfig = {
  apiKey: "AIzaSyAwsost6yHkOXDa3NlEjGNx3yB9M9_Lxik",
  authDomain: "spiderman-c17d4.firebaseapp.com",
  databaseURL: "https://spiderman-c17d4.firebaseio.com",
  projectId: "spiderman-c17d4",
  storageBucket: "spiderman-c17d4.appspot.com",
  messagingSenderId: "969920271746",
  appId: "1:969920271746:web:d756b97fa01e617579ab9b",
  measurementId: "G-NCLEN2SPJE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.setState({
      email: " ",
      password: " "
    })
  }

  signUpUser = (email, password) => {
    try {
      if (this.state.password.length < 6) {
        alert("Please enter at least 6 character")
        return;
      }
      firebase.auth().createUserWithEmailAndPassword(email, password)
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  loginUser = (email, password) => {
    try {
      firebase.auth().signInWithEmailAndPassword(email, password).then(function(user){
        console.log(user)
      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <Container style={styles.container}>
        <Form>
          <Item floatingLabel>
            <Label>Email:</Label>
            <Input
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(email) => this.setState({ email })}
            />
          </Item>

          <Item floatingLabel>
            <Label>Password:</Label>
            <Input
              secureTextEntry={true}
              autoCapitalize="none"
              autoCorrect={false}
              onChangeText={(password) => this.setState({ password })}
            />
          </Item>
          <Button
            onPress={this.loginUser}
            style={{ marginTop: 10 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text
              style={{ color: '#fff' }}>Login</Text>
          </Button>

          <Button
            style={{ marginTop: 10 }}
            full
            rounded
            primary
            onPress={() => this.signUpUser(this.state.email, this.state.password)}
          >
            <Text
              style={{ color: '#fff' }}>Sign Up</Text>
          </Button>
        </Form>
      </Container>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    justifyContent: "center",
    padding: 10
  }
})