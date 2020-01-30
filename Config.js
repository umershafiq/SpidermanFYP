import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyBOHKVXiOd59Rn4SoqKFoA0RKIXyFjoIvU",
    authDomain: "skilink-a2cca.firebaseapp.com",
    databaseURL: "https://skilink-a2cca.firebaseio.com",
    projectId: "skilink-a2cca",
    storageBucket: "skilink-a2cca.appspot.com",
    messagingSenderId: "788277505967",
    appId: "1:788277505967:web:280cb43a1cba2844a7895a",
    measurementId: "G-1VCKJWQNPQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
var database = firebase.database();