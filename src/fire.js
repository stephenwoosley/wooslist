import firebase from 'firebase'

var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyBKXoAjvHW8loVvtOgiqe0PDS4Ji-6ya00",
  authDomain: "wooslist-f24ea.firebaseapp.com",
  databaseURL: "https://wooslist-f24ea.firebaseio.com",
  projectId: "wooslist-f24ea",
  storageBucket: "wooslist-f24ea.appspot.com",
  messagingSenderId: "498668452755"
};
var fire = firebase.initializeApp(config);
export default fire;
