import React from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "motion/react";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs,
  FaGitAlt,
  FaDocker,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiPostgresql,
  SiMongodb,
  SiTailwindcss,
  SiVite,
} from "react-icons/si";

import "./Hero.css";
import userHeroImage from "../../assets/userHeroImage.png";
import { socialMediaLinks } from "../Navbar/Navbar";

const floatingIcons = [
  {
    icon: <FaReact />,
    className: "bg-react",
    style: { top: "8%", left: "8%" },
    duration: 8,
  },

  {
    icon: <FaHtml5 />,
    className: "bg-html",
    style: { top: "18%", left: "82%" },
    duration: 10,
  },

  {
    icon: <FaCss3Alt />,
    className: "bg-css",
    style: { top: "70%", left: "10%" },
    duration: 7,
  },

  {
    icon: <SiJavascript />,
    className: "bg-js",
    style: { top: "82%", left: "80%" },
    duration: 9,
  },

  {
    icon: <FaNodeJs />,
    className: "bg-node",
    style: { top: "50%", left: "90%" },
    duration: 11,
  },

  {
    icon: <SiExpress />,
    className: "bg-express",
    style: { top: "35%", left: "5%" },
    duration: 8,
  },

  {
    icon: <SiPostgresql />,
    className: "bg-postgres",
    style: { top: "12%", left: "48%" },
    duration: 9,
  },

  {
    icon: <FaGitAlt />,
    className: "bg-git",
    style: { top: "88%", left: "50%" },
    duration: 10,
  },

  {
    icon: <FaDocker />,
    className: "bg-docker",
    style: { top: "60%", left: "30%" },
    duration: 8,
  },

  {
    icon: <SiMongodb />,
    className: "bg-mongo",
    style: { top: "42%", left: "72%" },
    duration: 9,
  },

  {
    icon: <SiTailwindcss />,
    className: "bg-tailwind",
    style: { top: "25%", left: "30%" },
    duration: 7,
  },

  {
    icon: <SiVite />,
    className: "bg-vite",
    style: { top: "65%", left: "60%" },
    duration: 10,
  },
];

const Hero = () => {
  const currentTime = new Date().getHours();

  const greeting =
    currentTime < 12
      ? "Morning"
      : currentTime < 17
      ? "Afternoon"
      : "Evening";

  return (
    <section className="hero">

      <div className="hero-background-icons">

        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className={`floating-icon ${item.className}`}
            style={item.style}
            animate={{
              y: [0, -25, 0, 18, 0],
              x: [0, 10, 0, -10, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              duration: item.duration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            whileHover={{
              scale: 1.3,
              rotate: -1,
            }}
          >
            {item.icon}
          </motion.div>
        ))}

      </div>

      <div className="hero-content">

        <p className="hero-greeting">
          👋 Hello, Good {greeting}
        </p>

        <h1 className="hero-name">
          VED TELI
        </h1>

        <div className="hero-role">
          <TypeAnimation
            sequence={[
              "I'm a Full Stack Developer",
              1500,
              "I'm a Backend Developer",
              1500,
              "I'm a Frontend Developer",
              1500,
              "I'm a Software Developer",
              1500,
            ]}
            speed={55}
            repeat={Infinity}
          />
        </div>

        <p className="hero-description">
          I build responsive and user-friendly web applications using React,
          Node.js, Express and PostgreSQL. I enjoy creating clean interfaces
          and developing secure REST APIs that are scalable and maintainable.
        </p>

        <ul className="hero-socials">
          {socialMediaLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

      </div>

      <div className="hero-image">

        <div className="hero-image-bg"></div>

        <motion.img
          src={userHeroImage}
          alt="Ved Teli"
          whileHover={{
            y: -10,
            scale: 1.03,
          }}
          transition={{
            duration: .35,
          }}
        />

      </div>

    </section>
  );
};

export default Hero;