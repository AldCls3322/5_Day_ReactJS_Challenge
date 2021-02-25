import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyBngIGwdgnb5sPXbH_T79kL_lHjzgT-JqQ",
    authDomain: "slack-clone-challenge-b4d75.firebaseapp.com",
    projectId: "slack-clone-challenge-b4d75",
    storageBucket: "slack-clone-challenge-b4d75.appspot.com",
    messagingSenderId: "1082032696891",
    appId: "1:1082032696891:web:06510e6ca34a1b4336361e"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig); //Initializes firebase App
  const db = firebaseApp.firestore();   //Initialize data base named: 'firestore'


  export default db;    //use the firebase