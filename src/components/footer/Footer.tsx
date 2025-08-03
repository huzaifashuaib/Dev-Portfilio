import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaDev } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className=" bg-white text-white dark:bg-dark border-t border-gray-200 dark:border-gray-800">
      <div className="container py-8">
        <div className="flex items-center justify-between">
          <div className="mb-4 md:mb-0">
            <Link
              href={"/"}
              className="text-xl font-bold text-primary flex items-end font-mono"
            >
              <FaDev size={50} />
              <span className="text-xs font-mono">.huz</span>
            </Link>
            <p className="text-secondary mt-2 font-semibold">
              {new Date().getFullYear()} &copy; All Rights Reserved
            </p>
          </div>
          <div className="flex space-x-6">
            <Link
              href="/"
              className="text-2xl md:text-3xl text-gray-600 hover:text-primary dark:text-gray-300 transition-all duration-300 transform hover:scale-125 ease-in-out hover:-translate-y-2"
            >
              <FaGithub />
            </Link>
            <Link
              href="/"
              className="text-2xl md:text-3xl text-gray-600 hover:text-primary dark:text-gray-300 transition-all duration-300 transform hover:scale-125 ease-in-out hover:-translate-y-2"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="/"
              className="text-2xl md:text-3xl text-gray-600 hover:text-primary dark:text-gray-300 transition-all duration-300 transform hover:scale-125 ease-in-out hover:-translate-y-2"
            >
              <FaFacebook />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
