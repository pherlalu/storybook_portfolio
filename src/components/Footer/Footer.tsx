import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="text-white py-8">
      <div className=" mx-auto px-4">
        <hr className="border-gray-600 my-4" />
        <div className="flex justify-between items-center">
          <p className="text-gray-400">
            © 2024 Steffi Amper. All rights reserved.
          </p>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/steffi.amper"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/panyangamper/"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-instagram"></i>
            </a>
            <a
              href="https://twitter.com/PHERLALU"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-twitter"></i>
            </a>
            <a
              href="https://github.com/pherlalu"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/steffi-amper/"
              className="text-gray-400 hover:text-white"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
