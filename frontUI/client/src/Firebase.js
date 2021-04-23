import firebase from 'firebase/app';
import 'firebase/auth';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCOLlh5It6dPmagmPDsouXUnoRIeFPJh1U',
  authDomain: 'nice-car-wash.firebaseapp.com',
  projectId: 'nice-car-wash',
  storageBucket: 'nice-car-wash.appspot.com',
  messagingSenderId: '1008985706171',
  appId: '1:1008985706171:web:3006e4e76ebacdb6c8e39e',
  measurementId: 'G-LYDYTBMKF6',
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// export
export const authFirbase = firebase.default.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
export default firebase;
