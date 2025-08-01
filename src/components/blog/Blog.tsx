import { blogs } from "@/contents/blog";
import Link from "next/link";
import React from "react";
import { FaCalendar, FaClock } from "react-icons/fa";

const Blog = () => {
  return (
    <div className="py-20 container">
      <h3 className="text-3xl font-semibold text-center mb-12">
        Latest Blog Posts
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {blogs.map((blog) => (
          <article
            key={blog.slug}
            className="bg-white dark:bg-dark/50 shadow-md rounded-lg p-6"
          >
            <Link href={`/blog/${blog.slug}`}>
              <h3 className="text-xl font-semibold hover:text-primary mb-2 transition-all">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4">
                {blog.excerpt}
              </p>
              <div className="flex items-center text-gray-500 text-sm space-x-4 dark:text-gray-400">
                <span className="flex items-center">
                  <FaCalendar className="mr-2" />
                  {new Date(blog.date).toLocaleDateString()}
                </span>
                <span className="flex items-center">
                  <FaClock className="mr-2" />
                  {blog.readTime}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      <div className="mt-12 flex items-center justify-center">
        <Link
          href={"/blog"}
          className="inline-block w-fit px-8 py-3  bg-primary text-white rounded-lg hover:bg-primary/50  hover:ring-2 hover:ring-black dark:hover:ring-2 dark:hover:ring-white transition-all"
        >
          View All Posts
        </Link>
      </div>
    </div>
  );
};

export default Blog;
