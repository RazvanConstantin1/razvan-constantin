"use client";

// import icons
import { FaHtml5, FaCss3, FaJs, FaReact, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";

// about data
const about = {
  title: "About me",
  description:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora rerum iste quos rem, commodi placeat ratione nemo voluptates aliquid, a, possimus voluptatum harum saepe officia aut veritatis culpa. Accusantium, a?",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Razvan Constantin",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+41) 0765 223 412",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Romanian",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Romanian",
    },
  ],
};

// education data
const education = {
  icon: "/assets/resume/cap.svg",
  title: "My education",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci facere omnis aut laboriosam aliquid possimus inventore praesentium corrupti quasi nulla obcaecati voluptatem odit saepe, cupiditate hic deleniti maiores alias magnam.",
  items: [
    {
      institution:
        "IT School - BootCamp accredited by Romanian Minister of Education",
      degree: "Frontend Developer",
      duration: "2023",
    },
    {
      institution: "Udemy - Online course",
      degree: "Build Responsive Real-World Websites with HTML and CSS",
      duration: "2023",
    },
    {
      institution: "Udemy - Online course",
      degree: "The Complete JavaScript Course 2024: From Zero to Expert!",
      duration: "2024",
    },
    {
      institution: "Udemy - Online course",
      degree: "The Ultimate React Course 2024: React, Next.js, Redux & More",
      duration: "2024",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Adipisci facere omnis aut laboriosam aliquid possimus inventore praesentium corrupti quasi nulla obcaecati voluptatem odit saepe, cupiditate hic deleniti maiores alias magnam.",
  skillList: [
    {
      icon: <FaHtml5 />,
      name: "HTML 5",
    },
    {
      icon: <FaCss3 />,
      name: "CSS 3",
    },
    {
      icon: <FaJs />,
      name: "JavaScript",
    },
    {
      icon: <FaReact />,
      name: "React.js",
    },
    {
      icon: <SiTailwindcss />,
      name: "Tailwind CSS",
    },
    {
      icon: <SiNextdotjs />,
      name: "Next.js",
    },
    {
      icon: <TbBrandFramerMotion />,
      name: "Framer Motion",
    },
    {
      icon: <FaGithub />,
      name: "GitHub",
    },
  ],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";

import { motion } from "framer-motion";

function Resume() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div className="min-h-[40vh] w-full">
            <TabsContent>education</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}

export default Resume;
