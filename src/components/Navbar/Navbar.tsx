import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import myLogo from "../../assets/steffi_logo_final.png";
import "./Navbar.css";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-opacity-75 bg-black fixed top-0 left-0 w-full z-10">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-shrink-0 items-center">
            <Link to="/">
              <img
                src={myLogo}
                className="h-16 w-auto cursor-pointer"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:hidden">
            <button
              onClick={toggleMenu}
              className="text-white focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Mobile menu */}
          <div
            ref={menuRef}
            id="mobile-menu"
            className={`fixed top-16 right-0 bg-black text-white ${isOpen ? "block" : "hidden"} sm:hidden`}
            style={{ maxWidth: "300px" }}
          >
            <div className="flex flex-col items-start px-4 border-t border-gray-700">
              <button onClick={toggleMenu} className="text-white text-3xl mb-4">
                <svg
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
              <Link
                to="/"
                className="block text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link
                to="/portfolio"
                className="block text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Portfolio
              </Link>
              <Link
                to="/contact"
                className="block text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-3 font-silkscreen">
            <Link
              to="/"
              className="text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 transition-colors"
              aria-current="page"
            >
              About
            </Link>
            <Link
              to="/portfolio"
              className="text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Portfolio
            </Link>
            <Link
              to="/contact"
              className="text-white px-4 py-2 text-lg font-medium hover:bg-gray-700 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
