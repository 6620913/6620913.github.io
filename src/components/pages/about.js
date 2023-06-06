

import React from 'react';


import Navbar from '../rightcontainer/navbar/navbar';

import About from '../rightcontainer/about/about'

import '../../style/css/right.css';



// import Left from '../leftcontainer/left';





function AboutPage() {


  return (



    <div className="rightcontainer">
      <div className='container'>

        <Navbar />

        <About />

      </div>

    </div>

  );
}

export default AboutPage;