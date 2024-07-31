import React from "react";
import myLogo from "../../assets/my_logo_v1.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="bg-opacity-75 bg-black absolute top-0 left-0 w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex flex-shrink-0 items-center">
              <img src={myLogo} className="h-16 w-auto" alt="Logo" />
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <div className="flex space-x-3 font-silkscreen">
              <a
                href="#"
                className="text-white px-3 py-2 text-lg font-medium"
                aria-current="page"
              >
                About
              </a>
              <a href="#" className="text-white px-3 py-2 text-lg font-medium">
                Portfolio
              </a>
              <a href="#" className="text-white px-3 py-2 text-lg font-medium">
                Contacts
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
