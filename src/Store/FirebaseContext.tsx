// import React, { createContext, useState, ReactNode } from "react";
// import firebaseExports from "../Firebase/setup";
// type FirebaseContextType = typeof firebaseExports | null;

// export const FirebaseContext = createContext<FirebaseContextType>(null);

// interface User {
//   uid: string;
//   displayName:string
// }

// interface AuthContextType {
//   user: User | null;
//   setUser: React.Dispatch<React.SetStateAction<User | null>>;
// }

// const AuthContext = createContext<AuthContextType | null>(null);

// function Context({ children }: { children: ReactNode }) {
//   const [user, setUser] = useState<User | null>(null);

//   return (
//     <AuthContext.Provider value={{ user, setUser }}>
//       {children}
//     </AuthContext.Provider>
//   );
// }

// export { Context, AuthContext };
import React, { createContext, useState, ReactNode } from "react";
import firebaseExports from "../Firebase/setup";

type FirebaseContextType = typeof firebaseExports | null;

export const FirebaseContext = createContext<FirebaseContextType>(null);
type UserContextType = {
  uid: string;
  displayName: string;
};
interface AuthContextType {
  user: UserContextType | null;
  setUser: React.Dispatch<React.SetStateAction<UserContextType | null>>;
}

export const AuthContext = createContext<AuthContextType | null>(null);

interface ContextProps {
  children: ReactNode;
}

export const Context: React.FC<ContextProps> = ({ children }) => {
  const [user, setUser] = useState<UserContextType | null>(null);

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};