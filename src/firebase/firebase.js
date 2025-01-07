import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKRoIgd3ywmTFMSzNzFZ0T4GfWAFsFYZ4",
  authDomain: "unicart-d242d.firebaseapp.com",
  projectId: "unicart-d242d",
  storageBucket: "unicart-d242d.appspot.com",
  messagingSenderId: "259084158732",
  appId: "1:259084158732:web:3e2b1789f92941a2446b29"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);