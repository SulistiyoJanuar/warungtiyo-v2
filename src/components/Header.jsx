import React, { useState } from "react";
import { motion } from "framer-motion";
import { LuShoppingCart } from "react-icons/lu";
import { MdAdd, MdLogout } from "react-icons/md";

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { app } from "../firebase.config";

import Logo from "../assets/logo.svg";
import Avatar from "../assets/user.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../context/StateProvider";
import { actionType } from "../context/reducer";

const Header = () => {
  const firebaseAuth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const [{ user }, dispatch] = useStateValue();

  const [isMenu, setIsMenu] = useState(false);

  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData },
      } = await signInWithPopup(firebaseAuth, provider);
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0],
      });
      localStorage.setItem("user", JSON.stringify(providerData[0]));
    } else {
      setIsMenu(!isMenu);
    }
  };

  const logout = () => {
    setIsMenu(false);
    localStorage.clear();

    dispatch({
      type: actionType.SET_USER,
      user: null,
    });
  };

  return (
    <header className="sticky z-50 w-screen bg-white p-3 px-4 md:p-4 md:px-16 shadow-md top-0 left-0 right-0">
      {/* Desktop */}
      <div className="hidden md:flex w-full h-full justify-between">
        <Link to={"/"} className=" items-center flex">
          <img src={Logo} alt="user" />
          <div className="">
            <p className="font-bold text-green-700 text-xl">Warung</p>
            <p className="-mt-2 font-medium text-sm tracking-widest text-gray-500">Tiyo</p>
          </div>
        </Link>

        <ul className="flex items-center font-medium gap-8 ">
          <li className="text-base text-black hover:text-green-600 duration-100 transition-all ease-out cursor-pointer">Home</li>
          <li className="text-base text-black hover:text-green-600 duration-100 transition-all ease-out cursor-pointer">Menu</li>
          <li className="text-base text-black hover:text-green-600 duration-100 transition-all ease-out cursor-pointer">About</li>
          <li className="text-base text-black hover:text-green-600 duration-100 transition-all ease-out cursor-pointer">Service</li>
        </ul>

        <div className="flex items-center gap-6">
          <div className="relative flex items-center justify-center">
            <LuShoppingCart className="text-2xl cursor-pointer" />
            <div className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center cursor-pointer">
              <p className="text-xs text-white font-semibold cursor-pointer">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} className="cursor-pointer w-4 min-w-[40px] h-4 min-h-[40px] drop-shadow-xl rounded-full" onClick={login} />
            {isMenu && (
              <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-12">
                {user && user.email === "sulistiyojanuarakbar@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-out text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p className="px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-out text-base" onClick={logout}>
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile */}
      <div className="flex items-center justify-between md:hidden w-full h-full">
        <Link to={"/"} className=" items-center flex">
          <img src={Logo} alt="user" />
          <div className="">
            <p className="font-bold text-green-700 text-xl">Warung</p>
            <p className="-mt-2 font-medium text-sm tracking-widest text-gray-500">Tiyo</p>
          </div>
        </Link>

        <div className="flex items-center gap-6">
          <div className="relative flex items-center ml-2">
            <LuShoppingCart className="text-2xl cursor-pointer" />
            <div className="absolute -top-1 -right-2 w-5 h-5 rounded-full bg-green-600 flex items-center justify-center cursor-pointer">
              <p className="text-xs text-white font-semibold cursor-pointer">2</p>
            </div>
          </div>

          <div className="relative">
            <motion.img whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar} className="cursor-pointer w-4 min-w-[40px] h-4 min-h-[40px] drop-shadow-xl rounded-full" onClick={login} />
            {isMenu && (
              <motion.div initial={{ opacity: 0, scale: 0.6 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.6 }} className="w-40 bg-gray-50 shadow-xl rounded-lg flex flex-col absolute right-0 top-12">
                {user && user.email === "sulistiyojanuarakbar@gmail.com" && (
                  <Link to={"/createItem"}>
                    <p className="px-4 py-2 font-medium hover:text-green-600 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-out text-base">
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <ul className="flex flex-col font-medium ">
                  <li className="text-base px-4 py-2 text-black hover:text-green-600 hover:bg-slate-100 duration-100 transition-all ease-out cursor-pointer">Home</li>
                  <li className="text-base px-4 py-2 text-black hover:text-green-600 hover:bg-slate-100 duration-100 transition-all ease-out cursor-pointer">Menu</li>
                  <li className="text-base px-4 py-2 text-black hover:text-green-600 hover:bg-slate-100 duration-100 transition-all ease-out cursor-pointer">About</li>
                  <li className="text-base px-4 py-2 text-black hover:text-green-600 hover:bg-slate-100 duration-100 transition-all ease-out cursor-pointer">Service</li>
                </ul>
                <p
                  className="m-4 p-2 mt-2 justify-center shadow-md rounded-md font-medium bg-green-600 text-white hover:text-green-600 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all duration-100 ease-out text-base"
                  onClick={logout}
                >
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
