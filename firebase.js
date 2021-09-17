import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDeyi-R5UetTWLQ1HCDK2BMZ7PeidEHAVk",
  authDomain: "docs2-186cd.firebaseapp.com",
  projectId: "docs2-186cd",
  storageBucket: "docs2-186cd.appspot.com",
  messagingSenderId: "389256909468",
  appId: "1:389256909468:web:7ba3f6383092cd82601359",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export { db };
