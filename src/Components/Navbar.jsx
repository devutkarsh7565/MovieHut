import * as React from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import { useState } from "react";
import SearchBox from "./SearchBox";
import useAuth from "../Hooks/useAuth";
import useLogOut from "../Hooks/useLogOut";

export function Navbar() {
  const { auths } = useAuth();
  const { userLogOut } = useLogOut();
  const handleUserLogOut = () => {
    userLogOut(auths.setIsAuth);
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="sticky w-full top-0 z-10  backdrop-filter backdrop-blur-lg bg-opacity-30 border-b border-gray-200">
      <div className="w-full flex items-center h-20">
        <div className="w-full flex items-center  justify-between">
          <Link className="text-4xl  pt-2 mx-2" to="/">
            <span className="text-[#FFA500] ">Movie</span>hut
          </Link>
          <div className="hidden md:block ">
            <div className="flex items-center justify-around">
              <div className="mx-3">
                <SearchBox />
              </div>
              <Link
                className=" font-Raleway font-semibold py-3 mx-2  text-[#3d3d3d] rounded-2xl duration-500 "
                to="/"
              >
                HOME
              </Link>
              <span className="mx-2" />
              <Link
                className="font-Raleway font-semibold  py-3 mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
                to="/search"
              >
                SEARCH
              </Link>
              <span className="mx-2" />

              <Link
                className="font-Raleway font-semibold py-3 mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
                to="/genre"
              >
                GENRE
              </Link>
              {auths.isAuth && (
                <Link
                  className="font-Raleway font-semibold py-3 mx-2 text-[#3d3d3d]  rounded-2xl duration-500 "
                  to="/favourite"
                >
                  FAVOURITE
                </Link>
              )}

              {auths.isAuth ? (
                <button
                  className="font-Raleway font-semibold py-3 bg-[#0078AA]  px-3 mx-2 text-[#f3efef]  duration-500"
                  onClick={handleUserLogOut}
                >
                  SignOut
                </button>
              ) : (
                <Link
                  className="font-Raleway font-semibold py-3 px-3 text-[#3d3d3d]  rounded-2xl duration-500 "
                  to="/login"
                >
                  LOGIN
                </Link>
              )}
            </div>
          </div>
        </div>
        <div className="-mr-2 flex md:hidden">
          <div className="mx-3">
            <SearchBox />
          </div>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center justify-center px-4 rounded-md text-gray-800"
            aria-controls="mobile-menu"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            {!isOpen ? (
              <svg
                className="block h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            ) : (
              <svg
                className="block h-10 w-10"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      <Transition
        show={isOpen}
        enter="transition ease-out duration-100 transform"
        enterFrom="opacity-0 scale-95"
        enterTo="opacity-100 scale-100"
        leave="transition ease-in duration-75 transform"
        leaveFrom="opacity-100 scale-100"
        leaveTo="opacity-0 scale-95"
      >
        {(ref) => (
          <div className="md:hidden" id="mobile-menu">
            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="hover:bg-gray-700 hover:text-white text-black block px-3 py-2 rounded-md text-base font-medium"
              >
                Home
              </Link>

              <Link
                to="/search"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Search
              </Link>

              <Link
                to="/genre"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Genre
              </Link>
              <Link
                to="/login"
                className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Login
              </Link>
            </div>
          </div>
        )}
      </Transition>
    </nav>
  );
}
