import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="container py-28">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <div className="mb-4 size-32 relative rounded-full imageBackground">
          <Image
            src="/profile.jpg"
            alt="profile"
            fill
            className="object-cover object-top rounded-full"
          />
        </div>

        <h1 className="text-4xl font-bold md:text-6xl mb-6 font-mono titel-grediant ">
          Hi I'm
        </h1>
        <h1 className="text-4xl sm:text-6xl font-bold md:text-7xl mb-6 font-mono titel-grediant">
          Huzaifa Shauib
        </h1>
        {/* <p className="text-xl text-center md:3xl text-gray-600 dark:text-gray-300  mb-8 font-mono font-extrabold "> */}
        <p className="text-xl text-center md:text-3xl mb-8 font-mono font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text">
          Full stack developer with hands-on experience in React, Next.js, and
          Node.js.
        </p>

        <div className="flex items-center space-x-6 mb-8">
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
        <div className="flex gap-4 flex-col md:flex-row w-full justify-center ">
          <Link
            href={"/"}
            className="bg-primary inline-block w-full py-3 px-8 rounded-lg text-white transition-all dark:hover:bg-primary/0 md:w-auto hover:border hover:border-gray-300 text-center transform hover:scale-110 "
          >
            View Project
          </Link>
          <Link
            href={"/"}
            className="bg-gray-600 inline-block w-full py-3 px-8 rounded-lg text-white transition-all dark:hover:bg-primary/0 md:w-auto hover:border hover:border-gray-300 text-center transform hover:scale-110 "
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
