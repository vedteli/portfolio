import React from 'react'
import NavBar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Projects from '../Projects/Projects'
import projectsdata from '../Projects/projectsData'

const Home = () => {
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
  )
}

export default Home