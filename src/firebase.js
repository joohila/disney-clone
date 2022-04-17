import firebase from 'firebase'
// this is firebase 7 version for 8,9 and above import process changes 
const firebaseConfig = {
  apiKey: "AIzaSyDJXjVScRYwrJEfeXtXy2jnzBaN3DFqMkk",
  authDomain: "joohila-disney-clone.firebaseapp.com",
  projectId: "joohila-disney-clone",
  storageBucket: "joohila-disney-clone.appspot.com",
  messagingSenderId: "638251426044",
  appId: "1:638251426044:web:db56fe174b228c32b47779"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;

