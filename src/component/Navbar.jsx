import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Logo from "/img/Logo.png";
import Logo2 from "/img/Logo 2.png";

const Navbar = () => {
  return (
    <div className="navbar bg-base-200 fixed z-50">
      <div className="navbar-start lg:pl-7">
        <div className="dropdown">
          <label
            tabIndex={0}
            className="btn btn-ghost lg:hidden"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <Link to={"/nowplaying"}>Now Playing</Link>
            </li>

            <li>
              <Link to={"/toprated"}>Top Rated</Link>
            </li>
            <li>
              <Link to={"/upcoming"}>Upcoming</Link>
            </li>
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl hidden lg:flex"
        >
          <img src={Logo2} alt="" className="h-10 w-full" />
        </Link>
      </div>
      <div className="navbar-center">
        <Link
          to="/"
          className="btn btn-ghost normal-case text-xl lg:hidden"
        >
          <img src={Logo} alt="" className="h-10 w-full" />
        </Link>
        <ul className="menu menu-horizontal px-1  hidden lg:flex">
          <li className="mr-2">
            <Link to={"/nowplaying"}>Now Playing</Link>
          </li>

          <li className="mr-2">
            <Link to={"/toprated"}>Top Rated</Link>
          </li>
          <li>
            <Link to={"/upcoming"}>Upcoming</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <Link to={"/search"}>
          <button className="btn btn-ghost btn-circle md:mr-4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
