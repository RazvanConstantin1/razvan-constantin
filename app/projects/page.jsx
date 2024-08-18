"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image.js";
import ProjectSliderBtns from "@/components/ui/ProjectSliderBtns.jsx";

const projects = [
  {
    num: "01",
    category: "ANNA",
    title: "project 1",
    description:
      "Landing page for a hairstyling and make-up salon, designed to offer users an engaging and user-friendly experience. It features a main page showcasing the salon's services, high-quality images of hairstyles and make-up, and client testimonials. Additionally, a simulated online store allows users to browse and add beauty products to a cart, mimicking the online shopping experience.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Vanilla Javascript" },
    ],
    image: "/assets/work/Anna.png",
    live: "https://razvanconstantin1.github.io/ANNA-Hairstylist-Makeup-Artist/",
    github:
      "https://github.com/RazvanConstantin1/ANNA-Hairstylist-Makeup-Artist",
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
    category: "Work in progress",
    title: "project 3",
    description: "More projects to come soon ...",
    stack: [{ name: "Html 5" }, { name: "Css 3" }, { name: "Javascript" }],
    image: "",
    live: "",
    github: "",
  },
];

function Projects() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    // get current slide index
    const currentIndex = swiper.activeIndex;

    // update project state base on current slide index
    setProject(projects[currentIndex]);
  };

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
      className="min-h-[80vh] flex flex-col justify-center py12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-accent">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the las comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20"></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github project button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPreview={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative flex justify-center items-center bg-primary">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div>
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt="project"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* slider buttons */}
              <ProjectSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Projects;
