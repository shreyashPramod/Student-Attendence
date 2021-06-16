import firebase from 'firebase' ;

const firebaseConfig = {
     apiKey: "AIzaSyDf8iUHCMaey4wWeB_TNRsrjDh9LUtxzVs",
    authDomain: "school-attendance-bd765.firebaseapp.com",
    databaseURL: "https://school-attendance-bd765.firebaseio.com",
    projectId: "school-attendance-bd765",
    storageBucket: "school-attendance-bd765.appspot.com",
    messagingSenderId: "1008510349151",
    appId: "1:1008510349151:web:0f5cad716865fca402d0ea"
  };
  
  //initialize firedatabase
   let app = firebase.initializeApp(firebaseConfig); 
   export const db = app.database();

  
