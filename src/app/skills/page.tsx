"use client";
import React from "react";
import { cards, skillsList } from "../../contents/skills";
import { motion } from "framer-motion";
import { fadeInUp, fadeInUpp, staggerContainer } from "@/utilities/animation";

const page = () => {
  return (
    <div className="container pt-20 pb-30">
      <motion.h3
        {...fadeInUp}
        transition={{ delay: 0.1 }}
        className="text-4xl font-bold text-center mb-8 font-mono"
      >
        Skills
      </motion.h3>
      {skillsList && skillsList.length > 0 && (
        <motion.section
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true, amount: 0.025 }}
          className="mb-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all transform ">
            {skillsList.map((skill, index) => (
              <div
                key={index}
                className="ease-in-out duration-300 group  hover:scale-90"
              >
                <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md card cursor-pointer">
                  {skill.icon}
                  <h3 className="text-xl font-semibold mb-2 font-mono">
                    {skill.title}
                  </h3>
                  <ul className="text-secondary space-y-2 group-hover:translate-x-8 duration-300 ease-in-out">
                    {skill.items.map((item, index) => (
                      <li key={index} className=" tracking-wider">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {cards && cards.length > 0 && (
        <section>
          <motion.div
            initial="hidden"
            variants={staggerContainer}
            viewport={{ once: true, amount: 0.025 }}
            whileInView={"show"}
            className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden "
          >
            {cards.map((card, index) => (
              <motion.div
                key={index}
                variants={fadeInUpp}
                className="overflow-hidden relative duration-700 border rounded-xl  hover:bg-gray-800/20 dark:hover:bg-gray-800/10 group md:gap-8 hover:border-gray-400/50 borde border-gray-400/30  dark:border-gray-600 cursor-pointer"
              >
                <div className=" pointer-events-none">
                  <div
                    className="absolute z-0 inset-0 transition-all duration-1000"
                    style={{
                      maskImage: "linear-gradient(black, transparent)",
                    }}
                  ></div>

                  <div
                    className="absolute inset-0 z-10 bg-gradient-to-br opacity-100 via-gray-100/10 transition-all duration-1000 group-hover:opacity-50 "
                    style={{
                      maskImage:
                        "radial-gradient(240px at 145.5px 69px, white, transparent)",
                    }}
                  ></div>
                  <div
                    className="absolute inset-0 z-10 opacity-0 mix-blend-overlay transition duration-1000 group-hover:opacity-100"
                    style={{
                      maskImage:
                        "radial-gradient(240px at 145.5px 69px, white, transparent)",
                    }}
                  ></div>
                  <div className="py-4 flex flex-col justify-center items-center">
                    {card.svg}
                    <h1 className="text-sm sm:text-lg font-bold dark:text-white text-black text-center font-mono">
                      {card.title}
                    </h1>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </section>
      )}
    </div>
  );
};

export default page;
