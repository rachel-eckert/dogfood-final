import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtBU0eEXOxfPklQy_2kZ7GFafkP0iRpjM",
  authDomain: "dog-food-cce7d.firebaseapp.com",
  databaseURL: "https://dog-food-cce7d-default-rtdb.firebaseio.com",
  projectId: "dog-food-cce7d",
  storageBucket: "dog-food-cce7d.appspot.com",
  messagingSenderId: "609322283175",
  appId: "1:609322283175:web:d7dd9f5544660cdb396b82",
  measurementId: "G-2YNKL7JJDC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
