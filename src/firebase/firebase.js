import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAzhUpVgfs_wZpb1gcevbu0MKWS3jJIqOg",
    authDomain: "cityhospital-auth.firebaseapp.com",
    projectId: "cityhospital-auth",
    storageBucket: "cityhospital-auth.appspot.com",
    messagingSenderId: "936818136652",
    appId: "1:936818136652:web:7f198457f806b247fa06e9",
    measurementId: "G-FNXQJVER94"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);