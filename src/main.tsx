
// import ReactDOM from 'react-dom/client'
// import App from './App.tsx'
// import './index.css'
// import { FirebaseContext } from './Store/FirebaseContext.tsx'
// import firebaseExports from "./Firebase/setup.tsx";
 

// ReactDOM.createRoot(document.getElementById("root")!).render(
//   <FirebaseContext.Provider value={{ firebaseExports }}>
//     <App />
//   </FirebaseContext.Provider>
// );
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { FirebaseContext } from "./Store/FirebaseContext";
import firebaseExports from "./Firebase/setup";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <FirebaseContext.Provider value={firebaseExports}>
    <App />
  </FirebaseContext.Provider>
);
