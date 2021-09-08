import firebase from 'firebase';

// add SDK Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC3TL6bwzigD9RK9LWYra1w7JocBTVqrZc",
    authDomain: "team-voting-2ff0a.firebaseapp.com",
    databaseURL: "https://team-voting-2ff0a-default-rtdb.firebaseio.com",
    projectId: "team-voting-2ff0a",
    storageBucket: "team-voting-2ff0a.appspot.com",
    messagingSenderId: "662650884685",
    appId: "1:662650884685:web:f2717fd24b6521a4278204",
    measurementId: "G-E6MDTNNSH6"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();