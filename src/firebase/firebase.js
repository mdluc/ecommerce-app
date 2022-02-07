import firebase from 'firebase/compat/app';

import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyDwdNyQ5-XmSR5eaEK9eZXQLM7FybuEHj4",
  authDomain: "shop-db-5868b.firebaseapp.com",
  projectId: "shop-db-5868b",
  storageBucket: "shop-db-5868b.appspot.com",
  messagingSenderId: "566738374234",
  appId: "1:566738374234:web:bb831106901f3e908f5263",
  measurementId: "G-4B6EE199EX",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;