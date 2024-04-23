// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAcEchy9n7YgldzE2Jbv4cvsIPwbozkMIo",
  authDomain: "coffee-store-c170d.firebaseapp.com",
  projectId: "coffee-store-c170d",
  storageBucket: "coffee-store-c170d.appspot.com",
  messagingSenderId: "831711500710",
  appId: "1:831711500710:web:d23242c41c24e680ba1767"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth