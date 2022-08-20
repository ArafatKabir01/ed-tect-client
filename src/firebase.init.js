// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA-6cRzuhp_7ApD2-VyfA2omIfT_SNHgqY",
  authDomain: "ed-tech-login.firebaseapp.com",
  projectId: "ed-tech-login",
  storageBucket: "ed-tech-login.appspot.com",
  messagingSenderId: "386015006856",
  appId: "1:386015006856:web:1ba3f7363f6d61678e4f3d"
};

// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth