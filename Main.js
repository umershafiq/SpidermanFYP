import React from 'react';
import { StyleSheet, Text,Image } from 'react-native';
import * as firebase from 'firebase';
import { Container, Form, Input, Item, Button, Label } from 'native-base';
import { Actions } from 'react-native-router-flux';
import Config from './Config';

export default class Main extends React.Component {
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
      firebase.auth().signInWithEmailAndPassword(email, password).then(function (user) {
        // console.log(user)
        Actions.Home();
      })
    }
    catch (error) {
      console.log(error.toString())
    }
  }

  render() {
    return (
      <Container style={styles.container}>
 <Image
        source={require('./images/logo.png')}
        style={{ width: 300, height: 300, alignSelf: 'center', marginTop:15}} />
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
            style={{ marginTop: 2 }}
            full
            rounded
            success
            onPress={() => this.loginUser(this.state.email, this.state.password)}
          >
            <Text
              style={{ color: '#fff' }}>Login</Text>
          </Button>

          <Button
            style={{ marginTop: 2 }}
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
    padding: 5
  }
})