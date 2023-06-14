
import React from 'react';

import '../../rightcontainer/projects/projects.css';

import frontendwithbackenddemo from '../../../files/images/projects/frontendwithbackenddemo.jpg'





function Projects() {


    return (


        <div>
<div className='topic-head'><h1>Projects{'/>'}</h1></div>

            <div className='project-container'>

                
                <div className='projects'>

                    <div className='project-boxes'>

                        <div className='project-img'>
                            <img className="card-img-top" src={frontendwithbackenddemo} alt="Card image cap" />
                        </div>

                        <div className='project-content'>
                            
                            <h5 className="project-title">Front end with backend demo</h5>

                            
                            <div >It is a dynamic website where i used django as backend server and html/css for front end every data is coming from a database on server</div>
                            <div><span>tech Used</span>Django ,Html, Css</div>
                            <div className='p-btns'>
                                <div className='p-btn'>
                                    <a href="#" class="btn btn-primary">Code</a>
                                </div>
                                <div className='p-btn'>
                                    <a href="#" class="btn btn-primary">Demo</a>
                                </div>

                            </div>
                        </div>




                        {/* <div className="card" style={{ width: "80%" }}>

                            <div className='project-img'>
                            <img className="card-img-top" src={frontendwithbackenddemo} alt="Card image cap" />
                            </div>
                            <div className="card-body">
                                <h5 className="card-title">Front end with backend demo</h5>

                               
                                <p className="card-text">It is a dynamic website where i used django as backend server and html/css for front end every data is coming from a database on server</p>
                                <div className='p-btns'>
                                        <div className='p-btn'>
                                        <a href="#" class="btn btn-primary">Code</a>
                                        </div>
                                        <div className='p-btn'>
                                        <a href="#" class="btn btn-primary">Demo</a>
                                        </div>

                                </div>
                               
                            </div>
                        </div> */}









                    </div>


                </div>






            </div>





        </div>



    );
}

export default Projects;
