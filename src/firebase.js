// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyAnmBp78JZ1Lod-vz1whL4qV6NHE8ZJtro",
//   authDomain: "linkedin-clone-f3a40.firebaseapp.com",
//   projectId: "linkedin-clone-f3a40",
//   storageBucket: "linkedin-clone-f3a40.appspot.com",
//   messagingSenderId: "722502357611",
//   appId: "1:722502357611:web:031b9287a424e51a82172e",
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBOK7x5N5UnjY4TDqndzH7l5tvdNIsWFRc",
  authDomain: "todo-app-e3cf0.firebaseapp.com",
  projectId: "todo-app-e3cf0",
  storageBucket: "todo-app-e3cf0.appspot.com",
  messagingSenderId: "940016886081",
  appId: "1:940016886081:web:91686613f16b1b1f8001c0",
  measurementId: "G-JHPC7TP12K",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };
