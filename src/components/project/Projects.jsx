import React, { useState } from 'react'
import "./projects.css";
import List from "./List";
import Items from "./Items";
import { projects} from "../../Data";

const Projects = () => {
  const [projectsItems , setProjectsItems] = useState(projects)
  return (
    <section className='project section text-cs'>
      <h2 className="section__title text-cs">Projects</h2>
      <p className='project__subtitle text-cs'>
        My <span>Stuffs</span>
      </p>
      <div className='project__container container  grid'>
        <Items projectsItems={projectsItems}/>
      </div>

    </section>
  )
}

export default Projects
