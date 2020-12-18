import firebase from 'firebase'
import firestore from 'firebase/firestore'
var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "https://jobitta-form-talent.firebaseio.com",
    projectId: "jobitta-form-talent",
    storageBucket: "jobitta-form-talent.appspot.com",
    messagingSenderId: "",
    appId: ""
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config); 
 firebaseApp.firestore().settings({ timestampsInSnapshots: true})
 


export default firebaseApp.firestore()  
