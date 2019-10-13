import firebase from 'firebase/app';
import 'firebase/auth';


const config = {
    apiKey: "abcdefgh_123456789",
    authDomain: "your-app.firebaseapp.com",
    databaseURL: "https://your-app.firebaseio.com",
    projectId: "your-app",
    storageBucket: "your-app.appspot.com",
    messagingSenderId: "1234567890"
  };
  
  // Initialize Firebase
  firebase.initializeApp(config);



export default firebase;