import "./App.css";

import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Projects from "./components/Projects/Projects.jsx";

import projectsdata from "./components/Projects/projectsData.js";

const App = () => {
  return (
    <>
      <NavBar />

      <Hero />

      <section className="projects-section" id="projects">

        <span className="projects-badge">
          MY WORK
        </span>

        <h2 className="projects-heading">
          Featured Projects
        </h2>

        <p className="projects-subheading">
          A collection of projects that showcase my passion for
          building responsive, scalable and user-friendly web
          applications using modern technologies.
        </p>

        <div className="projects">

          {projectsdata.map((project) => (

            <Projects
              key={project.id}
              project={project}
            />

          ))}

        </div>

      </section>

    </>
  );
};

export default App;