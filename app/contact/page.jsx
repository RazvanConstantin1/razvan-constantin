"use client";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+41) 0765 223 412",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "razvanconstantin1097@gmail.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Address",
    description: "Nürensdorf, Switzerland",
  },
];

function Contact() {
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
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex items-center justify-center">
          <ul className="flex flex-col gap-10 mt-12">
            {info.map((item, index) => {
              return (
                <li
                  key={index}
                  className="flex flex-col gap-2 items-center justify-center"
                >
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div>
                    <p className="text-white/60">{item.title}</p>
                  </div>
                  <h3 className="text-xl">{item.description}</h3>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </motion.section>
  );
}

export default Contact;
