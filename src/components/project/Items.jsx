import React from 'react';
import { GoMarkGithub } from "react-icons/go";

const Items = ({projectsItems}) => {
  return (
    <>
      {projectsItems.map((projectsItems)=>{
        const {id, img, category, title , description} = projectsItems;
        return(
          <div className='project__items card card-two'>
            <div className='project__img__wrapper'>
              <img src={img} alt="" className='project__img'/>
            </div>
            <span className='project__category '>{category}</span>
            <h3 className='project__title'>{title}</h3>
            <a href='' className='link'>
              Code
              <GoMarkGithub style={{marginLeft:"5px"}}/>
            </a>
            <a href='' className='link2'>
              Demo
            </a>

          </div>
        )
      })}
    </>
  )
}

export default Items
