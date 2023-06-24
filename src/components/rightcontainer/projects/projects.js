
import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';
import '../../rightcontainer/projects/projects.css';

// import frontendwithbackenddemo from '../../../files/images/projects/frontendwithbackenddemo.jpg'





function Projects() {



    const [state, setState] = useState({

		details: [],


	}
	);
	useEffect(() => {
		
		let data;
		axios.get('http://localhost:8000/projects/')
			.then(res => {
				data = res.data;
				setState({
					details: data
				});
			})
			.catch(err => { })
		

		
	}, []);

   

    return (


        <div>
<div className='topic-head'><h1>Projects{'/>'}</h1></div>

            <div className='project-container'>

                
                <div className='projects'>

              
								{/* <div className='problem' key={id}>

										<NavLink to={"/" + detail.id} style={{ textDecoration: "None",color:"white"}}>
											{detail.id}{". "}{detail.problem}
										</NavLink>
						
								</div>
							 */}
                {state.details.map((detail,id) => (
                    <div className='project-boxes' key={id}>

                        <div className='project-img'>
                            <img className="card-img-top" src={detail.img} alt="Card image cap" />
                        </div>

                        <div className='project-content'>
                            
                            <h5 className="project-title">{detail.title}</h5>

                            
                            <div >{detail.disc}</div>
                            <div><span>tech Used</span>Django ,Html, Css</div>
                            <div className='p-btns'>
                                <div className='p-btn'>
                                    <a href={detail.codeUrl} class="btn btn-primary">Code</a>
                                </div>
                                <div className='p-btn'>
                                    <a href={detail.demoUrl} class="btn btn-primary">Demo</a>
                                </div>

                            </div>
                        </div>











                    </div>
                    )

                    )}

                </div>






            </div>





        </div>



    );
}

export default Projects;
