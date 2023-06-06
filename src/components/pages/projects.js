

import React from 'react';


import Navbar from '../rightcontainer/navbar/navbar';
import Projects from '../rightcontainer/projects/projects'

import '../../style/css/right.css';



// import Left from '../leftcontainer/left';





function ProjectsPage() {


  return (



    <div className="rightcontainer">
       
      <div className='container'>

      <Navbar />

        <Projects />

      </div>

    </div>

  );
}

export default ProjectsPage;