"use client";

import { useTheme } from "@/context/ThemeContext";
import { MoonIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { SunIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaDev } from "react-icons/fa";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const toggleIsMenu = (): void => setIsMenuOpen((prev) => !prev);

  const pathName = usePathname();
  const menuItems = [
    { href: "/", label: "Home" },
    { href: "/project", label: "Project" },
    { href: "/about", label: "About" },
    { href: "/skills", label: "Skills" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];
  return (
    <>
      <div className=" fixed max-w-6xl mx-3 xl:mx-auto flex items-center justify-between h-16 px-6 inset-x-0 top-5 rounded-full border border-gray-200 shadow-md dark:border-gray-700 backdrop-blur-sm bg-white/40 dark:bg-dark/80 z-40">
        {/* <div className="max-w-6xl mx-auto fixed inset-x-0 top-6 rounded-full border-b border-gray-200 shadow-sm dark:border-gray-700 backdrop-blur-sm bg-white/40 dark:bg-dark/80 z-50"> */}
        {/* <div className="max-w-6xl mx-auto px-4"> */}
        {/* desktop Links */}
        <Link
          href={"/"}
          className="text-xl font-bold text-primary flex items-end font-mono"
        >
          <FaDev size={40} />
          <span className="text-xs font-mono">.huz</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
          {menuItems?.map((item) => {
            const isActive = item.href === pathName;
            return (
              <Link
                key={item.label}
                href={item.href}
                className={`font-mono ${
                  isActive && "text-primary font-bold "
                } hover:text-primary transition-colors text-sm`}
              >
                &lt;{item.label} /&gt;
              </Link>
            );
          })}
          <button
            onClick={toggleTheme}
            className={`cursor-pointer rounded-lg p-2 hover:bg-gray-100 hover:text-primary  dark:bg-gray-700 transition-all  transform duration-500 ease-in-out ${
              theme === "dark" ? "rotate-90" : "rotate-0"
            } `}
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className=" h-6 w-6" />
            )}
          </button>
        </div>
        {/* Mobile Links */}
        <div className="md:hidden flex space-x-1">
          <button
            onClick={toggleTheme}
            className={`cursor-pointer rounded-lg p-2 hover:bg-gray-100 hover:text-primary  dark:bg-gray-700 transition-all  transform duration-500 ease-in-out ${
              theme === "dark" ? "rotate-90" : "rotate-0"
            } `}
          >
            {theme === "dark" ? (
              <SunIcon className="h-6 w-6" />
            ) : (
              <MoonIcon className=" h-6 w-6" />
            )}
          </button>
          <button
            className="  rounded-xl p-2 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer "
            onClick={toggleIsMenu}
          >
            <FaBarsStaggered className="size-6" />
          </button>
        </div>
      </div>
      {/* </div> */}
      <div
        className={`md:hidden fixed inset-0 overflow-hidden z-50 transform transition-all duration-500 ease-in-out ${
          isMenuOpen
            ? "min-h-screen fixed inset-0  bg-blue-100/50 backdrop-blur-xl opacity-100 scale-100 "
            : "max-h-0 opacity-0 scale-75 -translate-x-3 "
        }`}
      >
        <div
          className=" absolute right-12 top-14 z-50 cursor-pointer pointer-events-auto"
          onClick={toggleIsMenu}
        >
          <XMarkIcon className="size-10" />
        </div>
        <div className="py-4 space-y-5 flex flex-col justify-center items-center h-full relative">
          {menuItems.map((item) => (
            <div key={item.label}>
              <Link
                onClick={toggleIsMenu}
                href={item.href}
                className="block py-2 hover:text-primary transition-colors font-mono"
              >
                {item.label}
              </Link>
            </div>
          ))}
          {/* <button
            onClick={toggleTheme}
            className="cursor-pointer rounded-lg p-2 flex items-center gap-2 hover:bg-gray-100 border border-gray-400 hover:text-primary transition-colors dark:bg-gray-700 "
          >
            {theme === "dark" ? (
              <>
                <SunIcon className="h-6 w-6" />
                Light Mode
              </>
            ) : (
              <>
                <MoonIcon className=" h-6 w-6" />
                Dark Mode
              </>
            )}
          </button> */}
        </div>
      </div>
    </>
  );
};

export default Navbar;
