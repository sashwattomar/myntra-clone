import firebase from 'firebase/compat/app';
import 'firebase/compat/database';
const firebaseConfig = {
  apiKey: 'AIzaSyArvbabajl7S-AwcjmOBLh5Y-BU2hZTcxA',
  authDomain: 'myntra-c77b0.firebaseapp.com',
  projectId: 'myntra-c77b0',
  storageBucket: 'myntra-c77b0.appspot.com',
  messagingSenderId: '451579161299',
  appId: '1:451579161299:web:175b11a346395c13388226',
  measurementId: 'G-D42H97M5J8',
};
const fireDb = firebase.initializeApp(firebaseConfig);
export default fireDb.database().ref();
