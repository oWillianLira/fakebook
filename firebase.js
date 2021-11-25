import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyDM5B_VS50dowfhsCxkh9mv3r-s8tGCIi4',
  authDomain: 'fakebook-nextjs.firebaseapp.com',
  projectId: 'fakebook-nextjs',
  storageBucket: 'fakebook-nextjs.appspot.com',
  messagingSenderId: '395455091053',
  appId: '1:395455091053:web:bd6eaabfe59dd65eda8a64',
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
