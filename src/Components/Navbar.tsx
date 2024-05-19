import Logo from "../assets/Logo.jpg";
import search from "../assets/search-bar.png";
import Arrow from "../assets/down-arrow-icon.jpg";
import searchIcon from "../assets/Logos.png";
import Login from "./Login";
import { useContext, useState } from "react";
import { AuthContext, FirebaseContext } from "../Store/FirebaseContext";
import { useNavigate } from "react-router-dom";
type searchProps = {
  setSearch: (value: string) => void;
};
const Navbar = (props: searchProps) => {
  const [loginPop, setLoginPop] = useState(false);
  const authContext = useContext(AuthContext);
  const firebaseContext = useContext(FirebaseContext);
  if (!authContext || !firebaseContext) {
    return null;
  }
  

  //history
  const navigate=useNavigate()
  const handleLogut= async()=>{
    try {
      if (firebaseContext && firebaseContext.auth) {
        await firebaseContext.auth.signOut();
        navigate("/login");
      } else {
        console.error(
          "firebaseContext or firebaseContext.auth is not available"
        );
      }
    } catch (error) {
      console.log(error);
    }
  }

  const { user } = authContext;
  console.log("user name", user?.displayName);

  return (
    <>
      <div className="flex justify-between  p-5 bg-slate-100 shadow-md">
        <img src={Logo} alt="" className="w-11 h-9" />
        <div className="flex border-2 border-spacing-1 w-64 p-2 border-black ml-5 bg-white">
          <img src={search} alt="" className="w-6 h-5 mt-1" />
          <input
            type="text"
            placeholder="location"
            className="ml-3 outline-none"
          />
          <img src={Arrow} alt="" className="w-8 h-7" />
        </div>
        <div className="flex w-45 h-12 ml-4 border-2 border-black bg-white">
          <input
            onChange={(e) => props?.setSearch(e.target.value)}
            type="text"
            placeholder="Find cars,mobiles"
            className="ml-3 w-96 outline-none"
          />
          <img src={searchIcon} alt="" />
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer">
          <h1 className="font-semibold">English</h1>
          <img src={Arrow} alt="" className="w-8 h-7" />
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline">
          <h1 onClick={() => setLoginPop(!loginPop)} className="font-bold">
            {user ? user.displayName : "Login"}
          </h1>
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline">
          {user && <h1 className="font-bold" onClick={handleLogut}>Logout</h1>}
        </div>
        <div className=" w-28 flex h-12 p-2 ml-10 cursor-pointer rounded-full border border-yellow-500">
          <h1 className="font-bold text-lg ml-3">+ SELL</h1>
        </div>
      </div>
      {loginPop && <Login setLoginPop={setLoginPop} />}
    </>
  );
};

export default Navbar;
