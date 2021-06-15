import  firebase from 'firebase';
import firestore from 'firebase/firestore'

const settings ={timestampsInSnapshots: true};
var firebaseConfig = {
    apiKey: "AIzaSyBSB0L7eHAQAaeUrKSGGB0F_Yp3Vxhhh6w",
    authDomain: "cp-mate.firebaseapp.com",
    projectId: "cp-mate",
    storageBucket: "cp-mate.appspot.com",
    messagingSenderId: "932524133072",
    appId: "1:932524133072:web:68bae47e1698a6b8b92cd5"
  };
  // Initialize Firebase
  const firebaseApp=firebase.initializeApp(firebaseConfig);
 
 firebase.firestore().settings(settings);
 
export default firebase;
