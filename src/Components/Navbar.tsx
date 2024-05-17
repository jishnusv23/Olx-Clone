import Logo from "../assets/Logo.jpg";
import search from "../assets/search-bar.png";
import Arrow from "../assets/down-arrow-icon.jpg";
import searchIcon from "../assets/Logos.png";
import Login from "./Login";
import { useState } from "react";
const Navbar = () => {
  const [loginPop, setLoginPop] = useState(false);
  return (
    <>
      <div className="flex justify-between  p-5">
        <img src={Logo} alt="" className="w-11 h-9" />
        <div className="flex border-2 border-spacing-1 w-64 p-2 border-black ml-5">
          <img src={search} alt="" className="w-6 h-5 mt-1" />
          <input type="text" placeholder="location" className="ml-3" />
          <img src={Arrow} alt="" className="w-8 h-7" />
        </div>
        <div className="flex w-45 h-12 ml-4 border-2 border-black">
          <input
            type="text"
            placeholder="Find cars,mobiles"
            className="ml-3 w-96 "
          />
          <img src={searchIcon} alt="" />
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer">
          <h1 className="font-semibold">English</h1>
          <img src={Arrow} alt="" className="w-8 h-7" />
        </div>
        <div className="flex h-12 p-3 ml-10 cursor-pointer underline hover:no-underline">
          <h1 onClick={() => setLoginPop(!loginPop)} className="font-bold">
            Login
          </h1>
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
