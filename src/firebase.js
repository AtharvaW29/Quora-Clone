import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA2pV7uJ-19BeX1YVBYyESNQNTwOCWATCk",
  authDomain: "quora-clone-50.firebaseapp.com",
  projectId: "quora-clone-50",
  storageBucket: "quora-clone-50.appspot.com",
  messagingSenderId: "753092960457",
  appId: "1:753092960457:web:144eed2037f47692e56d18",
  measurementId: "G-SSTX72HRBT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const db = firebaseApp.firestore();
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export { auth, provider };
export default db;
