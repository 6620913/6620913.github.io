

import React from 'react';


import Navbar from '../rightcontainer/navbar/navbar';
import Intro from '../rightcontainer/intro/intro';
import '../../style/css/right.css';



// import Left from '../leftcontainer/left';





function Home() {


  return (



    <div className="rightcontainer">
    
      <div className='container'>
      <Navbar />
       

        <Intro />

      </div>

    </div>

  );
}

export default Home;
