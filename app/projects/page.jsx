"use client";

import React from "react";
import { motion } from "framer-motion";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import Link from "next/link";

const projects = [
  {
    num: "01",
    category: "HomezZ",
    title: "project 1",
    description:
      "This project simulates a complete online shopping experience. Developed with React and powered by Vite, the project delivers a fast and smooth user interface, allowing visitors to explore a wide range of furniture products. With the help of Redux Toolkit, I efficiently managed state across the application, enabling features with real-time updates.",
    stack: [
      { name: "React + Vite" },
      { name: "Tailwind Css" },
      { name: "Redux ToolKit" },
    ],
    image: "/assets/work/HomezZ.png",
    live: "https://homezz-sage.vercel.app/",
    github: "https://github.com/RazvanConstantin1/homezz",
  },
  {
    num: "02",
    category: "BrizzBar",
    title: "project 2",
    description:
      "The project is a landing page for a local restaurant, built with React and enhanced with dynamic animations using Framer Motion. It highlights the restaurant's menu and atmosphere, creating an interactive and visually appealing experience for users. The animations add a modern touch, making the browsing experience smooth and engaging.",
    stack: [
      { name: "React" },
      { name: "Tailwind Css" },
      { name: "Framer Motion" },
    ],
    image: "/assets/work/BrizzBar.png",
    live: "https://razvanconstantin1.github.io/brizz-bar-restaurant/",
    github: "https://github.com/RazvanConstantin1/brizz-bar-restaurant",
  },
  {
    num: "03",
    category: "ANNA",
    title: "project 3",
    description:
      "Landing page for a hairstyling and make-up salon, designed to offer users an engaging and user-friendly experience. It features a main page showcasing the salon's services, high-quality images of hairstyles and make-up, and client testimonials. Additionally, a simulated online store allows users to browse and add beauty products to a cart, mimicking the online shopping experience.",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "/assets/work/Anna.png",
    live: "https://razvanconstantin1.github.io/ANNA-Hairstylist-Makeup-Artist/",
    github:
      "https://github.com/RazvanConstantin1/ANNA-Hairstylist-Makeup-Artist",
  },
];

const projectApps = [
  {
    num: "01",
    category: "Split Bill",
    title: "project 2",
    description:
      "This is a React application designed to help you simplify the process of splitting bills. Add friends with names and photos, then use the bill calculator to input expenses and determine how much each person owes, based on who paid. It simplifies tracking and settling shared expenses.",
    stack: [{ name: "React" }],
    image: "/assets/work/bill-split.png",
    live: "https://razvanconstantin1.github.io/split-bill/",
    github: "https://github.com/RazvanConstantin1/split-bill",
  },
  {
    num: "02",
    category: "Airplane Mode",
    title: "project 2",
    description:
      "When you go to a vacation you got that weird feeling that you forgot something? So do I, so I made a small React app which lets you add items, mark them as packed, and delete them from a customizable list. You can sort by input order, packed status, or alphabetically, and the list is saved in local storage for easy access after refreshing the page",
    stack: [{ name: "React" }],
    image: "/assets/work/airplane-mode.png",
    live: "https://razvanconstantin1.github.io/airplane-mode/",
    github: "https://github.com/RazvanConstantin1/airplane-mode",
  },
];

function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col justify-center items-center gap-4 ">
          <h3 className="text-3xl w-full text-center pb-2">Websites</h3>
          {projects.map((project, index) => {
            // check for odd number to dinamically display project divs on the page
            const isOdd = index % 2 === 0;

            return (
              <div
                className="flex flex-col xl:gap-12 xl:flex-row items-start border border-accent rounded-lg px-2 xl:p-4"
                key={index}
              >
                <div
                  className={`${
                    isOdd ? "xl:order-none" : "order-2"
                  } w-full xl:w-[50%] xl:h-[500px] flex flex-col xl:justify-between order-2`}
                >
                  <div
                    className={`${
                      isOdd ? "xl:items-start" : "xl:items-end"
                    } flex flex-col h-[50%] items-center`}
                  >
                    <span className="text-6xl font-extrabold text-accent">
                      {project.num}
                    </span>
                    <h2 className="text-[42px] font-bold text-white">
                      {project.category}
                    </h2>
                    <p className="text-white/70 mb-4 leading-6 xl:leading-8">
                      {project.description}
                    </p>
                    <ul className="flex gap-4 mb-2">
                      {project.stack.map((stack, index) => (
                        <li key={index} className="text-xl text-accent">
                          {stack.name}
                        </li>
                      ))}
                    </ul>
                    <div className="border border-white/20"></div>
                  </div>
                  <div
                    className={`${
                      isOdd ? "justify-start" : "justify-end"
                    } flex  items-center gap-2 p-4`}
                  >
                    <Link href={project.live} target="_blank">
                      <button className="flex justify-center items-center sm:gap-2 bg-accent hover:bg-accent-hover rounded-full xl:px-4 xl:py-2 px-2 py-[1px] text-primary leading-6">
                        <div>
                          <BsArrowUpRight className="size-6" />
                        </div>
                        <span>Live Preview</span>
                      </button>
                    </Link>
                    <Link href={project.github} target="_blank">
                      <button className="flex justify-center items-center sm:gap-2 bg-white/85 hover:bg-white rounded-full xl:px-4 xl:py-2 px-2 py-[2px] text-primary leading-6">
                        <div>
                          <BsGithub className="size-6" />
                        </div>
                        <span>GitHub Repository</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full xl:w-[480px] p-4">
                  <Link href={project.live} target="_blank">
                    <img src={project.image} alt="project img" />
                  </Link>
                </div>
              </div>
            );
          })}

          <h3 className="text-3xl w-full text-center pb-2 mt-4">
            Web Applications
          </h3>

          {projectApps.map((project, index) => {
            // check for odd number to dinamically display project divs on the page
            const isOdd = index % 2 === 0;

            return (
              <div
                className="flex flex-col xl:gap-12 xl:flex-row items-start border border-accent rounded-lg px-2 xl:p-4"
                key={index}
              >
                <div
                  className={`${
                    isOdd ? "xl:order-none" : "order-2"
                  } w-full xl:w-[50%] xl:h-[500px] flex flex-col xl:justify-between order-2`}
                >
                  <div
                    className={`${
                      isOdd ? "xl:items-start" : "xl:items-end"
                    } flex flex-col h-[50%] items-center`}
                  >
                    <span className="text-6xl font-extrabold text-accent">
                      {project.num}
                    </span>
                    <h2 className="text-[42px] font-bold text-white">
                      {project.category}
                    </h2>
                    <p className="text-white/70 mb-4 leading-6 xl:leading-8">
                      {project.description}
                    </p>
                    <ul className="flex gap-4 mb-4">
                      {project.stack.map((stack, index) => (
                        <li key={index} className="text-xl text-accent">
                          {stack.name}
                        </li>
                      ))}
                    </ul>
                    <div className="border border-white/20"></div>
                  </div>
                  <div
                    className={`${
                      isOdd ? "justify-start" : "justify-end"
                    } flex  items-center gap-2 p-4`}
                  >
                    <Link href={project.live} target="_blank">
                      <button className="flex justify-center items-center sm:gap-2 bg-accent hover:bg-accent-hover rounded-full xl:px-4 xl:py-2 px-2 py-[1px] text-primary leading-6">
                        <div>
                          <BsArrowUpRight className="size-6" />
                        </div>
                        <span>Live Preview</span>
                      </button>
                    </Link>
                    <Link href={project.github} target="_blank">
                      <button className="flex justify-center items-center sm:gap-2 bg-white/85 hover:bg-white rounded-full xl:px-4 xl:py-2 px-2 py-[2px] text-primary leading-6">
                        <div>
                          <BsGithub className="size-6" />
                        </div>
                        <span>GitHub Repository</span>
                      </button>
                    </Link>
                  </div>
                </div>
                <div className="flex justify-center items-center w-full xl:w-[480px] p-4">
                  <Link href={project.live} target="_blank">
                    <img src={project.image} alt="project img" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
