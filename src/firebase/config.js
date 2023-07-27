import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCRpadnYmJQwxJiFEE2HMf7dG58z-kbWNI",
  authDomain: "miniblog-cbe18.firebaseapp.com",
  projectId: "miniblog-cbe18",
  storageBucket: "miniblog-cbe18.appspot.com",
  messagingSenderId: "564435405652",
  appId: "1:564435405652:web:9b94f21e9f3962e03496c1"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };