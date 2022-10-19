import { getApps, initializeApp } from "firebase/app";
import { getAuth, initializeAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyD1JHeI--jmgVtiAc14cet8_yZ5qvmPQFg",
  authDomain: "brightattempt2.firebaseapp.com",
  projectId: "brightattempt2",
  storageBucket: "brightattempt2.appspot.com",
  messagingSenderId: "747016471326",
  appId: "1:747016471326:web:bb3eb5df625686f9ca7f0f"
};

// Initialize Firebase
//let app = initializeApp(firebaseConfig);
let app;
if (getApps().length < 1) {
    app = initializeApp(firebaseConfig);
}

const auth = getAuth(app);

export { auth };