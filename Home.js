import React from 'react';
import { Text, View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Footer, FooterTab, Button, Icon, ActionSheet} from 'native-base';
import Events from './Events';
import { Actions } from 'react-native-router-flux';
import FooterTabs from './FooterTabs'
export default class HomeScreen extends React.Component {
    render() {
        return (
            <ScrollView>

                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ marginTop: 20, fontSize: 25, fontWeight: '700' }}>Events Highlight</Text>>
                </View>
                <View style={{ height: null, marginTop: 20 }}>
                    <ScrollView
                        alwaysBounceVertical={true}>
                        <Events
                            imageUri={require("./images/concert.jpg")}
                            name="IUVoice Concert 2020"
                        />
                        <TouchableOpacity
                            style={styles.detail}
                            onPress={Actions.RegisterEvent()}>
                            <Text style={styles.text}>See details</Text>
                            
                        </TouchableOpacity>
                        <Events
                            imageUri={require("./images/book-fair.jpg")}
                            name="Book fair 2020"
                        />
                        <TouchableOpacity
                            style={styles.detail}
                            onPress={() => this.props.navigation.navigate('Book')}>
                            <Text style={styles.text}>See details</Text>
                        </TouchableOpacity>
                        <Events
                            imageUri={require("./images/talk.jpg")}
                            name="FAST-NU Ted Talks"
                        />
                        <TouchableOpacity
                            style={styles.detail}
                            onPress={() => this.props.navigation.navigate('Fast')}>
                            <Text style={styles.text}>See details</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={() => this.props.navigation.navigate('EventsFeed')}>
                            <Text style={styles.text}>Find All</Text>
                        </TouchableOpacity>
                    </ScrollView>
                    <Footer>
                        <FooterTab>
                            <Button vertical>
                                <Icon name="apps" />
                                <Text>Apps</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="camera" />
                                <Text>Camera</Text>
                            </Button>
                            <Button vertical active>
                                <Icon active name="navigate" />
                                <Text>Navigate</Text>
                            </Button>
                            <Button vertical>
                                <Icon name="person" />
                                <Text>Contact</Text>
                            </Button>
                        </FooterTab>
                    </Footer>
                </View>
                <FooterTabs />
            </ScrollView>
        );
    }
}
const styles = StyleSheet.create({
    detail: {
        marginTop: 2,
        height: 30,
        backgroundColor: 'gray',
        marginLeft: 240,
        width: 100,
        marginBottom: 10,
        marginRight: 20,
        borderRadius: 10,
        alignItems: 'center'
    },
    button: {
        height: 50,
        marginTop: 3,
        borderRadius: 10,
        justifyContent: 'center',
        backgroundColor: '#00bfff',
        fontSize: 18,
        color: 'white',
        alignItems: 'center'
    },
    text: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    },
});