import React from "react";
import { education, experience } from "../../contents/about";

function page() {
  return (
    <div className="container py-20">
      <h3 className="text-4xl font-bold text-center mb-8 font-mono">
        About Me
      </h3>
      <section className="mb-16">
        <p className="text-xl text-secondary max-w-7xl mx-auto text-center font-sans">
          I am a MERN stack and Next.js developer with a strong interest in
          building modern web applications. I create dynamic and responsive apps
          using React.js, Next.js, Node.js, and MongoDB with a focus on
          delivering easy-to-use and efficient solutions. I enjoy solving
          complex problems and turning ideas into practical, user-friendly
          experiences. My goal is to create apps that not only look great but
          also perform smoothly.
        </p>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8 font-mono">
          Experiences
        </h2>
        <div className="max-w-5xl mx-auto space-y-8 transition-all">
          {experience.map((experience, index) => (
            <div
              key={index}
              className="card relative cursor-pointer hover:scale-110 duration-300 ease-in-out"
            >
              <div className="dark:bg-dark bg-white backdrop-blur-sm p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold font-mono mb-1">
                  {experience.position}
                </h3>
                <p className="text-primary mb-6 text-sm">
                  {experience.company}. {experience.duration}
                </p>
                <ul className="text-secondary space-y-1 list-disc list-inside">
                  {experience.roles.map((role, index) => (
                    <li key={index + 1}>{role}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-4xl font-bold text-center mb-8 font-mono">
          Education
        </h2>
        <div className="max-w-5xl mx-auto space-y-8 transition-all">
          {education.map((education, index) => (
            <div
              key={index}
              className="card relative cursor-pointer hover:scale-110 duration-300 ease-in-out"
            >
              <div className="dark:bg-dark bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-1 font-mono">
                  {education.title}
                </h3>
                <p className="text-primary text-sm mb-3">
                  {education.institute} {education.duration}
                </p>
                <p className="text-secondary text-base mb-2">
                  {education.description}
                </p>
              </div>
            </div>
          ))}
          {/* <div className="card relative cursor-pointer hover:scale-110 duration-300 ease-in-out">
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
          </div> */}
        </div>
      </section>
    </div>
  );
}

export default page;
