// import React, { useContext } from "react";
// import { signInWithPopup } from "firebase/auth";
// import { doc, setDoc } from "firebase/firestore";
// import guitar from "../assets/guitar.webp";
// import google from "../assets/google.png";
// import mobile from "../assets/mobile.png";
// import { FirebaseContext } from "../Store/FirebaseContext";
// import { AuthContext } from "../Store/FirebaseContext";

// type PopUpProp = {
//   setLoginPop: React.Dispatch<React.SetStateAction<boolean>>;
// };

// const Login: React.FC<PopUpProp> = ({ setLoginPop }) => {
//   const firebaseContext = useContext(FirebaseContext);
//   const authContext = useContext(AuthContext);
//   console.log("FirebaseContext:", firebaseContext);
//   console.log("AuthContext:", authContext);

//   if (!firebaseContext || !authContext) {
//     return null; // todo some loading time is null that time error showing problem solve using this condition
//   }

//   const { auth, googleAuthProvider, db } = firebaseContext;
//   const { user, setUser } = authContext;
  
//   const googleSignin = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleAuthProvider);
//       console.log(result,'result');
      
//       const user = result.user;
//       console.log(user,'result.user');
      
//       setUser({ uid: user.uid, displayName: user.displayName || "" });
//       await saveUserDataToFirestore(user);
//       setLoginPop(false);
//     } catch (err) {
//       console.error("The problem was Google auth:", err);
//     }
//   };
  
//   const saveUserDataToFirestore = async (user: any) => {
//     const userRef = doc(db, "users", user.uid);
//     await setDoc(
//       userRef,
//       {
//         uid: user.uid,
//         email: user.email,
//         displayName: user.displayName,
//         photoURL: user.photoURL,
//         lastLogin: new Date().toISOString(),
//       },
//       { merge: true }
//     );
//   };

//   console.log(user);
//   return (
//     <div
//       className="relative z-10"
//       aria-labelledby="modal-title"
//       role="dialog"
//       aria-modal="true"
//     >
//       <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"></div>
//       <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
//         <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
//           <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-96 sm:max-w-lg">
//             <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
//               <h1
//                 onClick={() => setLoginPop(false)}
//                 className="cursor-pointer font-semibold text-3xl"
//               >
//                 X
//               </h1>
//               <div className="sm:flex sm:items-start">
//                 <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left cursor-pointer">
//                   <div className="mt-2">
//                     <img src={guitar} alt="" className="w-20 h-20 ml-32" />
//                     <p className="text-base font-medium text-center mt-5">
//                       Help us become one of the safest places <br /> to buy and
//                       sell
//                     </p>
//                     <div className="flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer">
//                       <img src={mobile} alt="" className="w-6 h-6" />
//                       <h1 className="font-semibold ml-4">
//                         Continue with phone
//                       </h1>
//                     </div>
//                     <div
//                       onClick={googleSignin}
//                       className="flex border border-gray-300 p-2 rounded-md mt-4"
//                     >
//                       <img src={google} alt="" className="w-6 h-6" />
//                       <h1 className="font-semibold ml-12 cursor-pointer">
//                         Continue with Google
//                       </h1>
//                     </div>
//                     <h1 className="text-center mt-4">OR</h1>
//                     <h1 className="text-center mt-4 underline cursor-pointer">
//                       Login With Email
//                     </h1>
//                     <h1 className="text-center mt-28 text-sm">
//                       All your personal details are safe with us
//                     </h1>
//                     <h1 className="text-center mt-4 text-sm">
//                       If you continue, you are accepting
//                       <span className="text-blue-600">
//                         OLX Terms and Conditions <br /> and Privacy Policy
//                       </span>
//                     </h1>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;

import React, { useContext } from "react";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import guitar from "../assets/guitar.webp";
import google from "../assets/google.png";
import mobile from "../assets/mobile.png";
import { FirebaseContext } from "../Store/FirebaseContext";
import { AuthContext } from "../Store/FirebaseContext";

type PopUpProp = {
  setLoginPop: React.Dispatch<React.SetStateAction<boolean>>;
};

const Login: React.FC<PopUpProp> = ({ setLoginPop }) => {
  const firebaseContext = useContext(FirebaseContext);
  const authContext = useContext(AuthContext);

  if (!firebaseContext || !authContext) {
    return null; // Add a loading spinner or message here if necessary
  }

  const { auth, googleAuthProvider, db } = firebaseContext;
  const { user, setUser } = authContext;

  const googleSignin = async () => {
    try {
      const result = await signInWithPopup(auth, googleAuthProvider);
      const user = result.user;
      setUser({ uid: user.uid, displayName: user.displayName || "" });
      await saveUserDataToFirestore(user);
      setLoginPop(false);
    } catch (err) {
      console.error("The problem was Google auth:", err);
    }
  };

  const saveUserDataToFirestore = async (user: any) => {
    const userRef = doc(db, "users", user.uid);
    await setDoc(
      userRef,
      {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName,
        photoURL: user.photoURL,
        lastLogin: new Date().toISOString(),
      },
      { merge: true }
    );
  };

  return (
    <div
      className="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity"></div>
      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:w-96 sm:max-w-lg">
            <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <h1
                onClick={() => setLoginPop(false)}
                className="cursor-pointer font-semibold text-3xl"
              >
                X
              </h1>
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left cursor-pointer">
                  <div className="mt-2">
                    <img src={guitar} alt="" className="w-20 h-20 ml-32" />
                    <p className="text-base font-medium text-center mt-5">
                      Help us become one of the safest places <br /> to buy and
                      sell
                    </p>
                    <div className="flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer">
                      <img src={mobile} alt="" className="w-6 h-6" />
                      <h1 className="font-semibold ml-4">
                        Continue with phone
                      </h1>
                    </div>
                    <div
                      onClick={googleSignin}
                      className="flex border border-gray-300 p-2 rounded-md mt-4"
                    >
                      <img src={google} alt="" className="w-6 h-6" />
                      <h1 className="font-semibold ml-12 cursor-pointer">
                        Continue with Google
                      </h1>
                    </div>
                    <h1 className="text-center mt-4">OR</h1>
                    <h1 className="text-center mt-4 underline cursor-pointer">
                      Login With Email
                    </h1>
                    <h1 className="text-center mt-28 text-sm">
                      All your personal details are safe with us
                    </h1>
                    <h1 className="text-center mt-4 text-sm">
                      If you continue, you are accepting
                      <span className="text-blue-600">
                        OLX Terms and Conditions <br /> and Privacy Policy
                      </span>
                    </h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;

