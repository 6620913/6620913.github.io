import React from 'react';
// import 'materialize-css/dist/css/materialize.min.css';
// import 'materialize-css/dist/js/materialize.min.js';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Home from './components/pages/Home';
// import Skills from './components/pages/skills/Skills';
// import Experiences from './components/pages/experiences/Experiences';
// import Educations from './components/pages/educations/Educations';
// import Portfolios from './components/pages/portfolios/Portfolios';




// import logo from '../../files/images/logo.jpg'


function Left() {

    
  
    




  return (
    <div className="leftcontainer">
    {/* <div className="leftlogo leftmenu">
        <img src={logo}alt=""/>
        /Welc0me/
    </div> */}

    <div className ="home leftmenu maincolor" data-hover="run">

        <div className="leftmele">
           
            
                <img src="" alt=""/>
         
        </div >
        <a  className="leftmele lefttext" >01.  home()</a>

    </div>
    <div className="leftmenu">
        
        <div className="leftmele" >
           
            <img src="{% static 'images/claims.JPG' %}" alt=""/>
         
        </div >
        <a  className="leftmele lefttext" > 02. projects()</a>

    </div>

    <div className="leftmenu">
        <div className="leftmele">
            <img src="{% static 'images/medical.JPG' %}" alt=""/>
         
        </div >
        <a className="leftmele lefttext">03. about()</a>
       
        
    </div>
    <div className="leftmenu">
    
        <div className="leftmele">
            <img src="{% static 'images/profile.svg' %}" alt=""/>
         
        </div >
        <a className="leftmele lefttext" >04. contact()</a>

        
    </div>



</div>
  );
}

export default Left;