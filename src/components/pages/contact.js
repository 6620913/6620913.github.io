

import React from 'react';


import Navbar from '../rightcontainer/navbar/navbar';
import Contact from '../rightcontainer/contact/contact'

import '../../style/css/right.css';



// import Left from '../leftcontainer/left';





function ContactPage() {


  return (



    <div className="rightcontainer">
       <Navbar />
      <div className='home-container'>

       

        <Contact />

      </div>

    </div>

  );
}

export default ContactPage;