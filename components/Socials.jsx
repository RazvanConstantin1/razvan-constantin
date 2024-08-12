import Link from "next/link.js";

import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/RazvanConstantin1" },
  {
    icon: <FaLinkedinIn />,
    path: "https://www.linkedin.com/in/razvan-constantin-a62933198/",
  },
];

function Socials({ containerStyles, iconStyles }) {
  return (
    <div className={containerStyles}>
      {socials.map((item, index) => {
        return (
          <Link key={index} href={item.path} className={iconStyles}>
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
}

export default Socials;
