import React from "react";

const NewLetter = () => {
  return (
    <div className="py-20 bg-gray-100/30 backdrop-blur-sm dark:bg-dark/50 shadow-md overflow-hidden animate-slideUp">
      <div className="p-8 md:p-12 ">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">
                Subscribe to My Newletter
              </h3>
              <p className="text-gray-600 dark:text-gray-300 md:w-2/3">
                Get the latest updates on my projects, blog posts, and tech
                insights delivered straight to your inbox.
              </p>
            </div>
            <form className="flex flex-col md:flex-row gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 dark:text-white rounded-lg border border-gray-300 dark:border-gray-600 dark:bg-dark bg-white text-gray-500 focus:outline-none focus:ring-2 focus:ring-primary "
              />
              <button
                type="submit"
                className="bg-primary px-8 py-3 rounded-lg text-white hover:bg-primary/90 transition-colors cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewLetter;
