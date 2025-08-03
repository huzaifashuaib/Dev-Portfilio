import React from "react";
import { cards, skillsList } from "../../contents/skills";

const page = () => {
  return (
    <div className="container pt-20 pb-30">
      <h3 className="text-4xl font-bold text-center mb-8 font-mono">Skills</h3>
      <section className="mb-16">
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
      </section>

      <section>
        <div className="grid grid-cols-2 gap-x-10 gap-y-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 overflow-hidden ">
          {cards.map((card, index) => (
            <div
              key={index}
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
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default page;
