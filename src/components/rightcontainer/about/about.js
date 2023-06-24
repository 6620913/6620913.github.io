import React from 'react';
import {useState, useEffect } from 'react';
import axios from 'axios';

import '../../rightcontainer/about/about.css';






function About() {


  
  const [skills, setSkills] = useState({

		images: [],


	}
	);

	useEffect(() => {
		
		let data;
		axios.get('http://localhost:8000/skills/')
			.then(res => {
				data = res.data;
				setSkills({
					images: data
				});
			})
			.catch(err => { })
		

		
	}, []);

  return (

    <div id='about' className='About'>


      <div className='topic-head' ><h1>About/{'>'}</h1></div>

      <div className='about-content'>
        <div className='aboutclass'>



          <div className='aboutinfo'>

            <div className='info-block'>
              {/* <h5 className='info-block-heading'>
                WorkExperience
              </h5> */}

              <div className='about-txt'>
                "Welcome to my portfolio! I'm a passionate B.Tech student in Electrical Engineering at Netaji Subhas University of Technology. Proficient in Java, web development, deep learning, and Django for backend, I'm skilled in building robust software solutions. I also have experience with React for front-end development.

                I completed my 10th and 12th from Jawahar Navodaya Vidyalaya, Jaffarpur Kalan, where I developed strong problem-solving abilities. Currently seeking a software job opportunity to kickstart my career, I'm eager to learn and contribute to a dynamic team.

                Beyond my technical skills, I value continuous growth and staying updated with industry trends. Explore my portfolio for projects showcasing my abilities. If you believe I could be a valuable addition to your team, please reach out. I look forward to making a meaningful impact with your organization."
              </div>
              <div className='skills' >
                <div className='skill-head'>Skills{'/>'}</div>
              <div className='skill-container'>
              {skills.images.map((skill,id) => (
            <div className="card about-skill" key={id} >
              <img src={skill.img} className="card-img-top" alt="..."/>
            </div>
                )

                )}
                </div>
            </div>
            </div>

           

















          </div>

        </div>



      </div>

    </div>
  );
}

export default About;