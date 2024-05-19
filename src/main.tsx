
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
import { Context as AuthContextProvider } from "./Store/FirebaseContext"


ReactDOM.createRoot(document.getElementById("root")!).render(
  <FirebaseContext.Provider value={firebaseExports}>
    <AuthContextProvider>

    <App />
    </AuthContextProvider>

   
  </FirebaseContext.Provider>
);
