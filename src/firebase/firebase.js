import * as firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyC12gVsttjRWcAt05eX-NJFAbvdoLVuCZI',
  authDomain: 'vueproject-92db6.firebaseapp.com',
  projectId: 'vueproject-92db6',
  storageBucket: 'vueproject-92db6.appspot.com',
  messagingSenderId: '566602180023',
  appId: '1:566602180023:web:f3285f04d47e76224ab432',
};

const Firebase = firebase.initializeApp(firebaseConfig);

export default Firebase;
