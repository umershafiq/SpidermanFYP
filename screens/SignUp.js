import React, { Component } from 'react';
import { Text, View, Image, StyleSheet, Button, TextInput, onChangeText, SafeAreaView, ScrollView, TouchableOpacity } from 'react-native';

export default class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      InputName: '',
      InputUniversity: '',
      InputDob: '',
      InputDegree: '',
    };
  }
  CheckTextInput = () => {
    //Handler for the Submit onPress
    if (this.state.InputName != '') {
      if (this.state.InputUniversity != '') {
        if (this.state.InputDob != '') {
          if (this.state.InputDegree != '') {
            this.props.navigation.navigate('event')
          } else { alert('Please Enter Degree Program');}
          }  else { alert('Please Enter Date of Birth');}
          } else { alert('Please Enter University Name');}
           }   else { alert('Please Enter Name');}
      };
      render() {
        return (
          <ScrollView style={styles.viewing}>
            <SafeAreaView style={{ flex: 1 }}>
              <View style={styles.container}>
                <Image
                  source={require('../images/logo.png')}
                  style={{ width: 200, height: 200, alignSelf: 'center', }}
                />
                <TextInput
                  style={{ height: 60, color: 'black', fontSize: 18 }}
                  placeholder="Your name"
                  onChangeText={InputName => this.setState({ InputName })}
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  style={styles.input}
                  placeholder="University name"
                  onChangeText={InputUniversity => this.setState({ InputUniversity })}
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Date of Birth"
                  onChangeText={InputDob => this.setState({ InputDob })}
                  underlineColorAndroid="transparent"
                />
                <TextInput
                  style={styles.input}
                  placeholder="Degree program"
                  onChangeText={InputDegree => this.setState({ InputDegree })}
                  underlineColorAndroid="transparent"
                />
                <TouchableOpacity
                  style={styles.button}
                  onPress={this.CheckTextInput}>
                  <Text style={styles.text}>Sign up</Text>
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
        color: 'white',
        alignSelf:'center'
    },
      viewing: {
        backgroundColor: 'white',
      },
      header: {
        color: 'black',
        fontWeight: 'bold',
        fontSize: 30,
        alignSelf: 'center',
      },
      button: {
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#00bfff',
      },
      input: {
        height: 50,
        fontSize: 18,
        color: 'black'
      }
    });