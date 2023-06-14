

import React from 'react';


import Navbar from '../rightcontainer/navbar/navbar';
import Projects from '../rightcontainer/projects/projects'

import '../../style/css/right.css';



// import Left from '../leftcontainer/left';





function ProjectsPage() {


  return (



    <div className="rightcontainer">
        <Navbar />
        <div className='home-container'>

     

        <Projects />

      </div>

    </div>

  );
}

export default ProjectsPage;