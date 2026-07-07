import React from "react";
import { TypeAnimation } from "react-type-animation";
import "./Hero.css";
import userProfilePicture from "../../assets/userProfilePicture.png";
import { socialMediaLinks } from "../Navbar/Navbar";

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
      <div className="hero-content">
        <p className="hero-greeting">👋🏽 Hello, Good {greeting}!</p>

        <h1 className="hero-name">VED TELI</h1>

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
            speed={50}
            repeat={Infinity}
          />
        </div>

        <p className="hero-description">
          I build responsive and user-friendly web applications using React,
          Node.js, Express, and PostgreSQL. I enjoy creating clean,
          intuitive interfaces while developing secure and scalable REST APIs.
          I'm passionate about writing maintainable code and continuously
          learning modern technologies.
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
        <img src={userProfilePicture} alt="Ved Teli" />
      </div>
    </section>
  );
};

export default Hero;