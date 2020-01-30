import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import Main from './Main';
import Home from './Home';
// import HomeScreen from "./pages/HomeScreen";
import SettingsScreen from "./pages/SettingsScreen";
import AddPost from './screens/AddPost';
import AddEvent from './screens/AddEvent';
// import SignInScreen from "./pages/SignInScreen";
// import SignUp from './screens/SignUp';
import EventsFeed from './screens/EventsFeed';
//import PostScreen from './pages/PostScreen';
import RegisterEvent from './screens/RegisterEvent';
import Registration from './screens/Registration';
import FastTed from './posts/FastTed';
import BookFair from './posts/BookFair';
import PostsFeed from './screens/PostsFeed';
// import Login from './pages/Login'; 

export default class App extends Component {
  render() {
    return (
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="Main" component={Main} title="SKilink" initial={true} />
          <Scene key="Home" component={Home} title="Skilink" />
          <Scene key="SettingsScreen" component={SettingsScreen} title="Skilink" />
          <Scene key="RegisterEvent" component={RegisterEvent} title="Skilink" />
          <Scene key="Registration" component={Registration} title="Skilink" />
          <Scene key="FastTED" component={FastTed} title="Skilink" />
          <Scene key="BookFair" component={BookFair} title="Skilink" />
          <Scene key="EventsFeed" component={EventsFeed } title="Skilink" />
          
          
        </Scene>
      </Router>
    )
  }
}