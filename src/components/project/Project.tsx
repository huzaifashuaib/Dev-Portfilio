"use client";
import { projects } from "@/contents/project";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import { motion } from "framer-motion";
import { staggerContainer, fadeInUpp } from "@/utilities/animation";

const Project = ({ title }: { title?: string }) => {
  return (
    <div className={`${title && " py-2 md:py-20"} container`}>
      {title && (
        <motion.h3
          variants={fadeInUpp}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.025 }}
          className="text-3xl font-bold text-center mb-12 font-mono"
        >
          Featured Projects
        </motion.h3>
      )}

      {projects && projects.length > 0 && (
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.025 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={fadeInUpp}
              className="bg-white hover:bg-gray-500/10  dark:hover:bg-dark/80 shadow-md dark:bg-dark/50 p-6 rounded-lg transition-all transform duration-300 ease-in-out hover:scale-95 cursor-pointer flex flex-col justify-between "
            >
              <div>
                <div className="relative aspect-video rounded-lg mb-4 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover object-top"
                    sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
                  />
                </div>
                <h3 className="font-semibold text-xl mb-2 font-mono">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm tracking-wide">
                  {project.description}
                </p>
                <div className="flex gap-4 flex-wrap mb-4">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="text-primary bg-primary/10 px-3 py-1 rounded-full text-sm font-mono"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex gap-4 mt-auto">
                <Link
                  href={project.githubLink}
                  target="_blank"
                  className="flex items-center gap-2 text-secondary hover:bg-primary transition-all px-2 py-1 rounded-full hover:text-white transform hover:-translate-y-2"
                >
                  <FaGithub className="size-5" /> <span>Github</span>
                </Link>
                {project.demoLink !== "" && (
                  <Link
                    href={project.demoLink}
                    target="_blank"
                    className="flex items-center gap-2 text-secondary hover:bg-primary transition-all px-2 py-1 rounded-full hover:text-white transform hover:-translate-y-2 font-mono"
                  >
                    <FaExternalLinkAlt className="size-5" />{" "}
                    <span>Demo Link</span>
                  </Link>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      )}
    </div>
  );
};

export default Project;
