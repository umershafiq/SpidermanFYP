import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image,Button } from 'react-native';
export default class SettingsScreen extends React.Component {
  //Setting Screen to show in Setting Option
  render() {
    return (
      <View>
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ marginTop: 30, fontSize: 25, fontWeight: '700' }}>Profile</Text>
        </View>
        {/* <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Timeline')}>
          <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }}>MY TIMELINE</Text>
        </TouchableOpacity> */}
        <View style={styles.SectionStyle}>
          <Text style={{ fontSize: 18 }}>Username</Text>
          <Text style={{ marginTop: 5, fontSize: 18 }}>University Name</Text>
          <Text style={{ marginTop: 5, fontSize: 18 }}>Email ID</Text>
        </View>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AddEvent')}>
          <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }}>Add New Event</Text>
        </TouchableOpacity>
          <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('AddPost')}>
          <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }}>Add New Post</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Signin')}>
          <Text style={{ fontSize: 18, color: 'white', marginLeft: 15 }}>SIGN OUT</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  button: {
    height: 50,
    marginTop: 10,
    borderRadius: 10,
    justifyContent: 'center',
    backgroundColor: '#00bfff',
  },
  SectionStyle: {
    flexDirection: 'column',
    height: 120,
    marginTop: 15,
    paddingVertical: 20,
    paddingLeft: 5,
    paddingRight: 50,
  },
  ProfileIcon: {
    resizeMode: 'center',
    alignContent: 'flex-end',
    width: 150,
    height: 150,
    borderColor: 'black',
    borderWidth: 2
  },
});