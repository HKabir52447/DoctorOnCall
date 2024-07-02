import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenuUnfold } from "react-icons/ai";
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [toggle, setToggle] = useState(true);
  return (
    <div className="sticky top-0 bg-slate-100 z-50 shadow">
    <div className="nav_bar max-w-[1240px] mx-auto py-3 flex justify-between items-center px-3 ">
      
      {toggle ? (
        <AiOutlineMenuUnfold
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-4xl text-black-500"
        />
      ) : (
        <AiOutlineClose
          onClick={() => setToggle(!toggle)}
          className="md:hidden text-4xl text-black-500"
        />
      )}
      <div className="menu md:flex flex-row justify-between items-center">
        <div className="logo">
          <Link to="/">
          <img src={logo} alt="Logo" className="w-[60px]"/>
          </Link>
        </div>
        <div className="nav-link">
          <ul className="hidden md:flex gap-1 items-center font-bold text-[17px] md:ml-5">
            <Link
              className="py-2 px-6 hover:bg-green-500 hover:text-white duration-150"
              to="/"
            >
              Home
            </Link>

            <Link
              className="py-2 px-6 hover:bg-green-500 hover:text-white duration-150"
              to="/all-doctors"
            >
              All Doctors
            </Link>

            <Link
              className="py-2 px-6 hover:bg-green-500 hover:text-white duration-150"
              to="/about"
            >
              About us
            </Link>
          </ul>
        </div>
        {/* for small devices */}
        <ul
          className={`md:hidden font-bold text-[17px] fixed top-20 w-1/2 h-screen z-10 bg-green-500 text-white ${
            toggle ? "left-[-100%]" : "left-0"
          } duration-300`}
        >
          <li className="pl-5 pt-5">
            <Link to="/">Home</Link>
          </li>
          <li className="pl-5 pt-3">
            <Link to="/doctors">All Doctors</Link>
          </li>
          <li className="pl-5 pt-3">
            <Link to="/about">About us</Link>
          </li>
        </ul>
      </div>

      <div className="px-10 sm:mr-5">

        <Link
              className="text-[17px] font-bold border-2 border-green-400 py-1 px-4 hover:bg-green-500 hover:text-white duration-100 hover:border-transparent"
              to="/SlidingForm"
            >
              Sign In
            </Link>
      </div>

      </div>
    </div>
  );
};

export default Navbar;
