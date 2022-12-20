// const firebase = require("firebase-admin");

// // Best practice: Get the credential file and db url from environment varible
// const serviceAccount = require("<path-to-service-account-credential.json>");
// const dbUrl = "https://<Your DB>.firebaseio.com"; //You’ll get the DB Url from Firebase Console

// module.exports = () => {
//   firebase.initializeApp({
//     credential: firebase.credential.cert(serviceAccount),
//     databaseURL: dbUrl,
//   });
//   console.info("Initialized Firebase SDK");
// };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcbAgHcLYHOuMElmDL-Fh2GxG2EdjizeY",
  authDomain: "wellbell-fe767.firebaseapp.com",
  projectId: "wellbell-fe767",
  storageBucket: "wellbell-fe767.appspot.com",
  messagingSenderId: "241475391234",
  appId: "1:241475391234:web:8bba110c6ced34f3a13c1b",
  measurementId: "G-0S78BRPC6T",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
