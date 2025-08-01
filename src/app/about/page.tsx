import React from "react";
import {
  FaCode,
  FaGraduationCap,
  FaLaptop,
  FaLaptopCode,
} from "react-icons/fa";

function page() {
  return (
    <div className="container py-20">
      <h3 className="text-4xl font-bold text-center mb-8">About Me</h3>
      <section className="mb-16">
        <p className="text-xl text-secondary max-w-3xl mx-auto text-center">
          I'm a passionate web developer with expertise in creating responsive,
          user-friendly websites using modern technologies. I focus on clean
          code, performance, and delivering real-world solutions.
        </p>
      </section>

      {/* <section className="mb-16">
        <h3 className="section-title">Skills</h3>
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
      </section> */}

      <section className="mb-16">
        <h2 className="section-title">Experiences</h2>
        <div className="max-w-5xl mx-auto space-y-8 transition-all">
          <div className="card relative cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div className="dark:bg-dark bg-white backdrop-blur-sm p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Senior Full Stack Developer
              </h3>
              <p className="text-primary text-base mb-2">
                Company Name. 2024 - Present
              </p>
              <ul className="text-secondary space-y-2 list-disc list-inside">
                <li>
                  Develop responsive web applications using React.js, Next.js,
                  and TypeScript
                </li>
                <li>
                  Integrate RESTful APIs and manage frontend state using Redux
                  or Context API
                </li>
                <li>
                  Translate Figma/Adobe XD designs into high-quality UI
                  components using Tailwind CSS, HTML5, and CSS3
                </li>
              </ul>
            </div>
          </div>
          <div className="card relative cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div className="dark:bg-dark bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Senior Full Stack Developer
              </h3>
              <p className="text-primary text-base mb-2">
                Company Name. 2024 - Present
              </p>
              <ul className="text-secondary space-y-2 list-disc list-inside">
                <li>
                  Develop responsive web applications using React.js, Next.js,
                  and TypeScript
                </li>
                <li>
                  Integrate RESTful APIs and manage frontend state using Redux
                  or Context API
                </li>
                <li>
                  Translate Figma/Adobe XD designs into high-quality UI
                  components using Tailwind CSS, HTML5, and CSS3
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="section-title">Education</h2>
        <div className="max-w-5xl mx-auto space-y-8 transition-all">
          <div className="card relative cursor-pointer hover:scale-110 duration-300 ease-in-out">
            <div className="dark:bg-dark bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">
                Bachelor Of Science Information Technology 💻
              </h3>
              <p className="text-primary text-base mb-2">
                Government College University Faisalabad. 2019 - 2023.
              </p>
              <p className="text-secondary text-base mb-2">
                Focused on Software Engineering and Web Developmet
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default page;
