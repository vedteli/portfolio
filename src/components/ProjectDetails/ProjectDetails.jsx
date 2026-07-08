import React from 'react'
import projectsdata from '../Projects/projectsData'
import Projects from '../Projects/Projects'

const ProjectDetails = () => {
  return (
    <>
      <div className="projects">

          {projectsdata.map((project) => (

            <Projects
              key={project.id}
              project={project}
            />

          ))}

        </div>
    </>
  )
}

export default ProjectDetails