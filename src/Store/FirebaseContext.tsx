import { createContext } from "react";
import firebaseExports from "../Firebase/setup";
type FirebaseContextType = typeof firebaseExports | null;

export const FirebaseContext=createContext<FirebaseContextType>(null)