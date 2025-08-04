"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { fadeIn, fadeInUp, scaleIn } from "@/utilities/animation";

const Hero = () => {
  return (
    <div className="container py-28">
      <div className="max-w-3xl mx-auto flex flex-col items-center justify-center">
        <motion.div
          {...scaleIn}
          transition={{ delay: 0.2 }}
          className="mb-4 size-32 relative rounded-full imageBackground"
        >
          <Image
            src="/profile.jpg"
            alt="profile"
            fill
            className="object-cover object-top rounded-full"
          />
        </motion.div>

        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold md:text-6xl mb-6 font-mono titel-grediant "
        >
          Hi I'm
        </motion.h1>
        <motion.h1
          {...fadeInUp}
          transition={{ delay: 0.4 }}
          className="text-4xl sm:text-6xl font-bold md:text-7xl mb-6 font-mono titel-grediant"
        >
          Huzaifa Shauib
        </motion.h1>
        {/* <p className="text-xl text-center md:3xl text-gray-600 dark:text-gray-300  mb-8 font-mono font-extrabold "> */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.5 }}
          className="text-xl text-center md:text-3xl mb-8 font-mono font-extrabold bg-gradient-to-r from-orange-400 to-yellow-300 text-transparent bg-clip-text"
        >
          Full stack developer with hands-on experience in React, Next.js, and
          Node.js.
        </motion.p>

        <motion.div
          {...fadeIn}
          transition={{ delay: 0.6 }}
          className="flex items-center space-x-6 mb-8"
        >
          <Link
            href="https://github.com/huzaifashuaib"
            target="_blank"
            className="text-2xl md:text-3xl text-gray-600 hover:text-primary dark:text-gray-300 transition-all duration-300 transform hover:scale-125 ease-in-out hover:-translate-y-2"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://www.linkedin.com/in/huzaifa-shuaib-797962212/"
            target="_blank"
            className="text-2xl md:text-3xl text-gray-600 hover:text-primary dark:text-gray-300 transition-all duration-300 transform hover:scale-125 ease-in-out hover:-translate-y-2"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://www.facebook.com/huzaifa.ojla/"
            target="_blank"
            className="text-2xl md:text-3xl text-gray-600 hover:text-primary dark:text-gray-300 transition-all duration-300 transform hover:scale-125 ease-in-out hover:-translate-y-2"
          >
            <FaFacebook />
          </Link>
        </motion.div>
        <div className="flex gap-4 flex-col md:flex-row w-full justify-center ">
          <a
            href={"/huzaifaCv.pdf"}
            download
            className="bg-primary inline-block w-full py-3 px-8 rounded-lg text-white transition-all dark:hover:bg-primary/0 md:w-auto hover:border hover:border-gray-300 text-center transform hover:scale-110 font-mono"
          >
            Download CV
          </a>
          <Link
            href={"/contact"}
            className="bg-gray-600 inline-block w-full py-3 px-8 rounded-lg text-white transition-all dark:hover:bg-primary/0 md:w-auto hover:border hover:border-gray-300 text-center transform hover:scale-110 font-mono"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
