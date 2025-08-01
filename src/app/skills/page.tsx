import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaLaptop,
  FaLaptopCode,
} from "react-icons/fa";

const page = () => {
  return (
    <div className="container py-20">
      <h3 className="text-4xl font-bold text-center mb-8 font-mono">Skills</h3>
      <section className="mb-16">
        {/* <h3 className="section-title">Skills</h3> */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 transition-all transform ">
          <div className="ease-in-out duration-300 group  hover:scale-90">
            <div className="bg-white dark:bg-dark p-6 rounded-lg shadow-md card cursor-pointer">
              <FaCode className="size-6 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="text-secondary space-y-2 group-hover:translate-x-8 duration-300 ease-in-out">
                <li>React / Next.js</li>
                <li>Typescript / Javascript</li>
                <li>Tailwind CSS</li>
                <li>HTML / CSS3</li>
              </ul>
            </div>
          </div>
          <div className="ease-in-out duration-300 relative group hover:scale-90 ">
            <div className=" bg-white dark:bg-dark p-6 rounded-lg shadow-md card cursor-pointer">
              <FaLaptopCode className="size-6 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Backend</h3>
              <ul className="text-secondary space-y-2 group-hover:translate-x-8 duration-300 ease-in-out">
                <li>Node.js</li>
                <li>Express</li>
                <li>PostgreSQL</li>
                <li>MongoDB</li>
              </ul>
            </div>
          </div>

          <div className=" ease-in-out duration-300 group hover:scale-90">
            <div className=" bg-white dark:bg-dark p-6 rounded-lg shadow-md card  cursor-pointer">
              <FaGraduationCap className="size-6 text-primary mb-4" />
              <h3 className="text-xl font-semibold mb-2">Frontend</h3>
              <ul className="text-secondary space-y-2  group-hover:translate-x-8 duration-300 ease-in-out ">
                <li>Git / Github</li>
                <li>Docker</li>
                <li>AWS</li>
                <li>CI / CD</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div>
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            className="h-12 w-12 sm:w-12 sm:h-12 text-yellow-500"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
          </svg>
        </div>
      </section>
    </div>
  );
};

export default page;
