import firebase from 'firebase'
import firestore from 'firebase/firestore'
var config = {
    apiKey: "AIzaSyBCGiNRHC9oEwTGo-VXwBZ1A5eB6E5eRe8",
    authDomain: "jobitta-form-talent.firebaseapp.com",
    databaseURL: "https://jobitta-form-talent.firebaseio.com",
    projectId: "jobitta-form-talent",
    storageBucket: "jobitta-form-talent.appspot.com",
    messagingSenderId: "38006004589",
    appId: "1:38006004589:web:2297fb09ddbedf583ad864"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(config); 
 firebaseApp.firestore().settings({ timestampsInSnapshots: true})
 


export default firebaseApp.firestore()  