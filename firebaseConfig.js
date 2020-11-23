import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
    apiKey: "AIzaSyA9MuHO_BVEFEfFbFXlbUhsGrfLleKzlvE",
    authDomain: "todo-9ffe3.firebaseapp.com",
    databaseURL: "https://todo-9ffe3.firebaseio.com",
    projectId: "todo-9ffe3",
    storageBucket: "todo-9ffe3.appspot.com",
    messagingSenderId: "761186663574",
    appId: "1:761186663574:web:7963d0fa725ce6549b16b7"
  };
 

  firebase.initializeApp(firebaseConfig);
  firebase.firestore();

  export default firebase;