"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/utilities/animation";
interface Data {
  name: string;
  email: string;
  msg: string;
}
type Status = "idle" | "loading" | "success" | "error" | null;
const Page = () => {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    msg: "",
  });
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const [status, setStatus] = useState<Status>("idle");
  const handleSubmit = async (e: React.FormEvent): Promise<void> => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("api/contact", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw "Failed to send Message ❌";
      }
      setStatus("success");
      setData({
        name: "",
        email: "",
        msg: "",
      });
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  };
  useEffect(() => {
    if (status === "success") {
      const timer = setTimeout(() => {
        setStatus(null);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [status]);
  return (
    <div className="container py-20">
      <motion.h3
        {...fadeInUp}
        transition={{ delay: 0.1 }}
        className="text-4xl font-bold text-center mb-16 font-mono"
      >
        Contact Me
      </motion.h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          {...slideInLeft}
          transition={{ delay: 0.2 }}
          className="space-y-8"
        >
          <h3 className="text-2xl font-semibold mb-4 font-mono">
            Get in Touch
          </h3>
          <p className="text-secondary">
            I&apos;m always open to disscusion new project, creative idea, or
            opportunities to be part of vision
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="size-6 text-primary" />
              <div className="flex items-center space-x-5">
                <h3 className="hidden md:flex text-bold font-mono">Email:</h3>
                <Link
                  href={"mailto:huzaifashoaib7@gmail.com"}
                  className="text-secondary hover:text-primary "
                >
                  huzaifashoaib7@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="size-6 text-primary" />
              <div className="flex items-center space-x-5">
                <h3 className="hidden md:flex text-bold font-mono">Phone :</h3>
                <Link
                  href={"tel:+92 3049436559"}
                  className="text-secondary hover:text-primary"
                >
                  +92 (304) 9436559
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaLocationArrow className="size-6 text-primary" />
              <div className="flex items-center space-x-5">
                <h3 className="hidden md:flex text-bold font-mono">
                  Location :
                </h3>
                <p className="text-secondary hover:text-primary cursor-pointer">
                  Faisalabad
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          {...slideInRight}
          transition={{ delay: 0.2 }}
          className="bg-white dark:bg-dark p-6 rounded-lg shadow-md"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium mb-2">
                Name
              </label>
              <input
                value={data.name}
                type="text"
                id="name"
                name="name"
                onChange={handleChange}
                placeholder="Enter Your Name"
                className="w-full px-2 py-3 rounded-md border text-secondary dark:placeholder:text-white/50 bg-white dark:bg-dark border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-none outline-none"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-2">
                Email
              </label>
              <input
                value={data.email ?? ""}
                type="emil"
                name="email"
                onChange={handleChange}
                id="email"
                placeholder="Enter Your Email"
                className="w-full px-2 py-3 rounded-md border text-secondary dark:placeholder:text-white/50 bg-white dark:bg-dark border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-none outline-none"
              />
            </div>
            <div>
              <label htmlFor="msg" className="block text-sm font-medium mb-2">
                Message
              </label>
              <textarea
                onChange={handleChange}
                name="msg"
                value={data.msg ?? ""}
                id="msg"
                placeholder="Enter Your Message"
                rows={4}
                className="w-full px-2 py-3 rounded-md border text-secondary dark:placeholder:text-white/50 bg-white dark:bg-dark border-gray-300 dark:border-gray-700 focus:ring-2 focus:ring-primary focus:border-none outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary py-4 rounded-lg text-white font-medium hover:bg-primary/80 cursor-pointer transition-colors duration-300 ease-in-out font-mono"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
            </button>
            {status === "success" && (
              <p className="text-green-500 text-center">
                Message Sent Successfully !
              </p>
            )}
            {status === "error" && (
              <p className="text-red-500 text-center">
                Error Message not Sent!
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
