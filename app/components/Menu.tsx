"use client";
import { MenuProps } from "@/types/propTypes";
import { useState } from "react";

const Menu = ({ onB1Click, onB2Click, onB3Click, onB4Click, onB5Click }: MenuProps) => {
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
        <div className={show ? "fixed h-screen w-screen z-40 bg-black lg:hidden opacity-70 ease-out duration-500" : "fixed h-screen w-screen z-40 bg-black pointer-events-none lg:hidden opacity-0 ease-in duration-500"} onClick={() => setShow(!show)}></div>
        <div className={show ? "fixed z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-slate-100 h-full top-24 left-0 w-2/3 lg:w-1/4 py-4 px-6 ease-out duration-500" : "fixed z-50 bg-gradient-to-r from-pink-600 to-pink-500 text-slate-100 h-full top-24 left-[-100%] w-2/3 lg:w-1/4 py-4 px-6 ease-in duration-500"}>
          <h2 className="text-2xl font-bold mt-8 mb-16">Rakchad Yingcheep</h2>
          <ul>
            <li>
              <button className="py-4 text-lg font-semibold" onClick={() => { onB1Click ? onB1Click() : null; setShow(false); }}>Announcements</button>
            </li>
            <li>
              <button className="py-4 text-lg font-semibold" onClick={() => { onB2Click ? onB2Click() : null; setShow(false); }}>Favorites</button>
            </li>
            <li>
              <button className="py-4 text-lg font-semibold" onClick={() => { onB3Click ? onB3Click() : null; setShow(false); }}>History</button>
            </li>
            <li>
              <button className="py-4 text-lg font-semibold" onClick={() => { onB4Click ? onB4Click() : null; setShow(false); }}>Payment</button>
            </li>
            <li>
              <button className="py-4 text-lg font-semibold" onClick={() => { onB5Click ? onB5Click() : null; setShow(false); }}>Settings</button>
            </li>
          </ul>
          <div className="py-4 mt-40 mb-4">
            <button className="font-medium">Sign Out</button>
          </div>
        </div>
      </>
    </>
  );
};

export default Menu;
