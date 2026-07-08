import { motion } from "motion/react";
import {
  Download,
  Eye,
  Briefcase,
  FolderGit2,
  Code2,
} from "lucide-react";

import "./Resume.css";

import resumePDF from "../../assets/VedTeli_Resume.pdf";
import NavBar from "../Navbar/Navbar";

const Resume = () => {
  return (
    <div>
    
      <NavBar />
    <motion.section
      className="resume-page"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7 }}
    >  

      {/* <div className="resume-stats">

        <div className="stat-card">
          <Briefcase size={28} />
          <h3>Experience</h3>
          <span>2+ Years</span>
        </div>

        <div className="stat-card">
          <FolderGit2 size={28} />
          <h3>Projects</h3>
          <span>15+</span>
        </div>

        <div className="stat-card">
          <Code2 size={28} />
          <h3>Technologies</h3>
          <span>20+</span>
        </div>

      </div> */}

      <div className="resume-viewer">

        <iframe
          src={resumePDF}
          title="Resume"
        />

      </div>
      <div className="resume-header">

        {/* <span className="resume-badge">
          MY RESUME
        </span> */}

        <h1>
          Resume
        </h1>

        <p>
          Explore my experience, technical skills and projects.
          You can preview my resume below or download a PDF copy.
        </p>

        <div className="resume-buttons">

          <a
            href={resumePDF}
            download
            className="download-btn"
          >
            <Download size={18} />
            Download Resume
          </a>

          <a
            href={resumePDF}
            target="_blank"
            rel="noopener noreferrer"
            className="preview-btn"
          >
            <Eye size={18} />
            View Fullscreen
          </a>

        </div>

      </div>

    </motion.section>
    </div>
  );
};

export default Resume;