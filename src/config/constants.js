import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyCbRgCbV_ABi1Dkzsy551sZS4QsRY-E4MA",
  authDomain: "platon-bcf77.firebaseapp.com",
  databaseURL: "https://platon-bcf77.firebaseio.com",
  projectId: "platon-bcf77",
  storageBucket: "platon-bcf77.appspot.com",
  messagingSenderId: "122018306926"
};

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth