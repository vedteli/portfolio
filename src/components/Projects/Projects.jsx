import "./Projects.css";
import { motion } from "motion/react";

import {
  ArrowUpRight,
  ExternalLink,
} from "lucide-react";

const Projects = ({ project }) => {
  return (
    <motion.article
      className="project-card"
      whileHover={{ y: -12 }}
      transition={{ duration: 0.25 }}
    >
      <div className="project-image-container">
        <img
          src={project.image}
          alt={project.title}
          className="project-image"
        />

        <div className="project-image-overlay"></div>
      </div>

      <div className="project-body">

        <div className="project-tags">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="project-tag"
            >
              {tech}
            </span>
          ))}
        </div>

        <h2 className="project-title">
          {project.title}
        </h2>

        <p className="project-description">
          {project.description}
        </p>

        <div className="project-buttons">

          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="primary-btn"
          >
            Live Demo

            <ArrowUpRight size={18} />
          </a>

          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="secondary-btn"
          >
            GitHub

            <ExternalLink size={18} />
          </a>

        </div>

      </div>
    </motion.article>
  );
};

export default Projects;