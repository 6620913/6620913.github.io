

import React from 'react';


import Navbar from '../rightcontainer/navbar/navbar';
import Intro from '../rightcontainer/intro/intro';
import Projects from '../rightcontainer/projects/projects'
import About from '../rightcontainer/about/about'
import Contact from '../rightcontainer/contact/contact'
import '../../style/css/right.css';



// import Left from '../leftcontainer/left';





function Home() {


  return (



    <div className="rightcontainer">
<Navbar />
      <div className='home-container'>
        


        <Intro />
        <Projects />
        <About />
        <Contact />




    
      </div>

  </div>

  );
}

export default Home;
