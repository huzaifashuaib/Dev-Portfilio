import Blog from "@/components/blog/Blog";
import React from "react";

const page = () => {
  return (
    <div className="container py-20">
      <h2 className="text-4xl font-semibold text-center mb-16 font-mono">
        Blog
      </h2>
      <Blog />
    </div>
  );
};

export default page;
