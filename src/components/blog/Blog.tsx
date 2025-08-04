"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaCalendar, FaClock } from "react-icons/fa";

const Blog = ({ title }: { title?: string }) => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles?username=huzaifashoaib")
      .then((res) => res.json())
      .then(setArticles)
      .catch(console.error);
  }, []);

  const refineBlog = articles?.map(
    ({
      canonical_url,
      description,
      published_at,
      published_timestamp,
      created_at,
      cover_image,
      id,
      reading_time_minutes,
      tag_list,
      title,
    }) => ({
      canonical_url,
      description,
      published_at,
      published_timestamp,
      created_at,
      id,
      cover_image,
      reading_time_minutes,
      tag_list,
      title,
    })
  );
  return (
    <div className={`${title && "py-20"} container`}>
      {title && (
        <h3 className="text-3xl font-semibold text-center mb-12 font-mono">
          {title}
        </h3>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {refineBlog.map((blog) => (
          <article
            key={blog.id}
            className="bg-white dark:bg-dark/50 shadow-md rounded-lg p-6"
          >
            <Link
              href={`${blog.canonical_url}`}
              className="flex flex-col h-full"
            >
              <h3 className="text-xl font-semibold hover:text-primary mb-2 transition-all font-mono">
                {blog.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1 flex text-base tracking-wide">
                {blog.description}
              </p>
              <div className="flex  justify-between text-gray-500 text-sm space-x-4 dark:text-gray-400">
                <span className="flex items-center font-mono">
                  <FaCalendar className="mr-2" />
                  {new Date(blog.published_timestamp).toLocaleDateString()}
                </span>
                <span className="flex items-center font-mono">
                  <FaClock className="mr-2" />
                  {blog.reading_time_minutes}{" "}
                  {blog.reading_time_minutes > 1 ? "mins" : "min"}
                </span>
              </div>
            </Link>
          </article>
        ))}
      </div>
      {/* <div className="mt-12 flex items-center justify-center">
        <Link
          href={"/blog"}
          className="inline-block w-fit px-8 py-3  bg-primary text-white rounded-lg hover:bg-primary/50  hover:ring-2 hover:ring-black dark:hover:ring-2 dark:hover:ring-white transition-all"
        >
          View All Posts
        </Link>
      </div> */}
    </div>
  );
};

export default Blog;
