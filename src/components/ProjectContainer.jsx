import React from 'react'
import ProjectCard from './ProjectCard'

const ProjectContainer = () => {
  return (
    <section>
    <h1 className="text-center text-xl sm:text-4xl font-semibold text-white">My Projects</h1>
    <div className='flex flex-wrap'>

    <ProjectCard/>
    <ProjectCard/>
    <ProjectCard/>
   
    </div>
    </section>
  )
}

export default ProjectContainer