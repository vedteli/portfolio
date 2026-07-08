import "./Navbar.css";
import { motion } from "motion/react";
import { MobileSheet } from "./MobileSheet";
import userProfilePlaceholder from "../../assets/userProfileImage.png";

import { NavLink } from "react-router-dom";

import {
  Home,
  User,
  FolderGit2,
  NotebookPen,
  FileText,
  Mail,
} from "lucide-react";

export const socialMediaLinks = [
  {
    name: "Github",
    url: "https://github.com/vedteli",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/vedteli",
  },
  {
    name: "Email",
    url: "mailto:ssawdawkar@gmail.com",
  },
];

export const icons = {
  Home: <Home size={20} />,
  // About: <User size={20} />,
  Projects: <FolderGit2 size={20} />,
  Blogs: <NotebookPen size={20} />,
  Resume: <FileText size={20} />,
  Contact: <Mail size={20} />,
};

export const navoptions = [
  {
    name: "Home",
    Url: "/",
  },
  // {
  //   name: "Projects",
  //   Url: "/projects",
  // },
  // {
  //   name: "Blogs",
  //   Url: "/blogs",
  // },
  {
    name: "Resume",
    Url: "/resume",
  },
  {
    name: "Contact",
    Url: "/contact",
  },
];

const NavBar = () => {
  return (
    <nav className="navbar">

      <motion.div
        className="profile-picture"
        whileHover={{
          scale: 1.08,
          rotate: 5,
        }}
        whileTap={{
          scale: 0.95,
        }}
      >
        <NavLink to="/">
          <img
            src={userProfilePlaceholder}
            alt="Ved Teli"
          />
        </NavLink>
      </motion.div>

      <ul className="navoptions">

        {navoptions.map((option) => (

          <li key={option.name}>

            <NavLink
              to={option.Url}
              className={({ isActive }) =>
                isActive
                  ? "nav-link active-link"
                  : "nav-link"
              }
            >
              {option.name}
            </NavLink>

          </li>

        ))}

      </ul>

      <div className="mobile-navbar">
        <MobileSheet />
      </div>

    </nav>
  );
};

export default NavBar;