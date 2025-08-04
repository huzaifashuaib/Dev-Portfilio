import Project from "@/components/project/Project";
import React from "react";

function page() {
  return (
    <div className="container py-20">
      <h2 className="text-4xl font-bold text-center mb-4 font-mono">
        My Projects
      </h2>
      <p className="text-lg text-secondary font-semibold text-center mb-16 font-sans">
        Here are some of my Recent Projects.
      </p>

      <Project />
    </div>
  );
}

export default page;
