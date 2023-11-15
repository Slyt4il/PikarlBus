"use client";
import { useState } from "react";

const Menu = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="fixed z-50 w-full h-24 shadow-xl bg-slate-100 opacity-80">
        <div className="flex justify-between items-center w-full h-full px-4 lg:px-12">
          <button className="text-2xl" onClick={() => setShow(!show)}>
            Pikarl<span className="font-bold text-pink-400">Bus</span>
          </button>
          <div className="font-semibold">Credit: 79.24 THB</div>
        </div>
      </div>
      <>
        <div className={show ? "fixed h-screen w-screen z-40 bg-black lg:hidden opacity-70 ease-out duration-500" : "fixed h-screen w-screen z-40 bg-black pointer-events-none lg:hidden opacity-0 ease-in duration-500"}></div>
        <div className={show ? "fixed z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-slate-100 h-full top-24 left-0 w-2/3 lg:w-1/4 py-4 px-6 ease-out duration-500" : "fixed z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-slate-100 h-full top-24 left-[-100%] w-2/3 lg:w-1/4 py-4 px-6 ease-in duration-500"}>
          <h2 className="text-2xl font-bold mt-8 mb-16">Rakchad Yingcheep</h2>
          <ul>
            <li>
              <button className="py-4 text-lg font-semibold">Announcements</button>
            </li>
            <li>
              <button className="py-4 text-lg font-semibold">Favorites</button>
            </li>
            <li>
              <button className="py-4 text-lg font-semibold">History</button>
            </li>
            <li>
              <button className="py-4 text-lg font-semibold">Payment</button>
            </li>
            <li>
              <button className="py-4 text-lg font-semibold">Settings</button>
            </li>
          </ul>
          <div>
            <button className="py-40">Sign Out</button>
          </div>
        </div>
      </>
    </>
  );
};

export default Menu;
