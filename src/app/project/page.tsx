import { projects } from "@/contents/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

function page() {
  return (
    <div className="container py-20">
      <h2 className="text-4xl mb-2 text-bold text-center">My Projects</h2>
      <p className="text-lg text-secondary font-semibold text-center mb-16">
        Here are some of my Recent Projects.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project) => (
          <article
            key={project.title}
            className="bg-white hover:bg-gray-500/10  dark:hover:bg-dark/80 shadow-md dark:bg-dark/50 p-6 rounded-lg transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer "
          >
            <div className="relative aspect-video rounded-lg mb-4 overflow-hidden">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
              />
            </div>
            <h3 className="font-semibold text-xl mb-2">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            <div className="flex gap-4 flex-wrap mb-4">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="text-primary bg-primary/10 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className="flex gap-4">
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:bg-primary transition-all px-2 py-1 rounded-full hover:text-white transform hover:-translate-y-2"
              >
                <FaGithub className="size-5" /> <span>Github</span>
              </Link>
              <Link
                href={project.githubLink}
                target="_blank"
                className="flex items-center gap-2 text-secondary hover:bg-primary transition-all px-2 py-1 rounded-full hover:text-white transform hover:-translate-y-2"
              >
                <FaExternalLinkAlt className="size-5" /> <span>Demo Link</span>
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}

export default page;
