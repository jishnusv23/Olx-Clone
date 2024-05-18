import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCcuNE83NN677To4RWkmQqM99Ef7Hk7dOI",
  authDomain: "olx-clone-c2e8d.firebaseapp.com",
  projectId: "olx-clone-c2e8d",
  storageBucket: "olx-clone-c2e8d.appspot.com",
  messagingSenderId: "931972959831",
  appId: "1:931972959831:web:712729847e8dd6b5c5dd12",
};

const app = initializeApp(firebaseConfig);
 const auth = getAuth(app);
 const googleAuthProvider = new GoogleAuthProvider();
 const db = getFirestore(app);

const firebaseExports = {
  auth,
  googleAuthProvider,
  db
};

export default firebaseExports;