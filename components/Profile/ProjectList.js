import React, { createContext, useEffect, useState } from 'react'
import ProjectCard from '../ProjectCard';
import ProjectDetails from '../ProjectDetails/ProjectDetails';

export const SelectedProjectContext=createContext();

const ProjectList = ({userProject}) => {
    const [showModal,setShowModal] = useState(false);
    const [project,setProject]=useState([]);

    const onProjectClick = (item) => {
      setShowModal(true);
      setProject(item);
    }
   
  return (
    
    <div className='mt-10 mb-10'>
      {userProject?
      <div className='columns-2 md:columns-3
      lg:columns-4 mx-auto space-y-3 lg:space-y-4'>
        {userProject.map((item)=>(
            <div onClick={()=> onProjectClick(item)}>
                <ProjectCard project={item}/>
            </div>
        ))}

      </div>:null}
      <SelectedProjectContext.Provider value={{project,setProject}}>
         {showModal? <ProjectDetails setShowModal={(value)=>setShowModal(value)} />:null}
      </SelectedProjectContext.Provider>
      
    </div>
  )
}

export default ProjectList;
