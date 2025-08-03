"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaLocationArrow, FaPhone, FaEnvelope } from "react-icons/fa";
interface Data {
  name: string;
  email: string;
  msg: string;
}
type Status = "idle" | "loading" | "success" | "error" | null;
function page() {
  const [data, setData] = useState<Data>({
    name: "",
    email: "",
    msg: "",
  });
  console.log(data);
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };
  const [status, setStatus] = useState<Status>("idle");
  const handleSubmit = async (e: React.FormEvent): Promise<any> => {
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
      <h3 className="text-4xl font-bold text-center mb-16">Contact Me</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <h3 className="text-2xl font-semibold mb-4">Get in Touch</h3>
          <p className="text-secondary">
            I'm always open to disscusion new project, creative idea, or
            opportunities to be part of vision
          </p>
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <FaEnvelope className="size-6 text-primary" />
              <div className="flex items-center space-x-5">
                <h3 className="text-bold">Email to:</h3>
                <Link
                  href={"mailto:huzaifashoaib7@gmail.com"}
                  className="text-secondary hover:text-primary"
                >
                  huzaifashoaib7@gmail.com
                </Link>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <FaPhone className="size-6 text-primary" />
              <div className="flex items-center space-x-5">
                <h3 className="text-bold">Phone :</h3>
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
                <h3 className="text-bold">Location :</h3>
                <p className="text-secondary hover:text-primary cursor-pointer">
                  Faisalabad
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md">
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
              className="w-full bg-primary py-4 rounded-lg text-white font-medium hover:bg-primary/80 cursor-pointer transition-colors duration-300 ease-in-out"
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
        </div>
      </div>
    </div>
  );
}

export default page;
