import React from 'react'

const ProjectCard = () => {
  return (
    <div className='m-5'>
        <div className='text-white bg-[#181818] w-[350px]'>
            <img className='rounded-lg mx-auto' src={"https://www.liquidplanner.com/wp-content/uploads/2019/04/HiRes-17.jpg"} height={250} width={340} />
            <h1>Title</h1>
            <p>Description</p>
            <h3>Technology Used</h3>
            <ul>
                <li>Tech 1</li>
                <li>Tech 2</li>
                <li>Tech 3</li>
                <li>Tech 4</li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectCard