


import '../../style/css/right.css';

import Navbar from './navbar/navbar';
import Projects from './projects/projects';
import About from './about/about';
import Contact from './contact/contact';
import Intro from './intro/intro';



import { useRef } from "react";



function Right() {


    const home = useRef(null);
    const about = useRef(null);
    const contact = useRef(null);
    const projects = useRef(null);



    const scrollToSection = (elementRef) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: 'smooth'
        })
    }


    return (

        <div>




            <div className="rightcontainer">
                <div id='home' className='container home'>

                    <div className='navclass' >
                        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                            <a className="navbar-brand" href="#">Welcome</a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                                <div className="navbar-nav">
                                    <a onClick={()=>scrollToSection(home)}  className="nav-item nav-link active">Home <span class="sr-only">(current)</span></a>
                                    <a onClick={()=>scrollToSection(projects)}className="nav-item nav-link" >Projects</a>
                                    <a onClick={()=>scrollToSection(about)} className="nav-item nav-link" >About</a>
                                    <a onClick={()=>scrollToSection(contact)} className="nav-item nav-link ">Contact</a>
                                </div>
                            </div>
                        </nav>


                <button onCanPlay={()=>scrollToSection(projects)}/>
                    </div>




                    <div ref={home}>
                    < Intro />
                    </div>
                   


                    <div useRef={projects} id='projects' >
                        < Projects  />
                    </div>

<div ref={about}>
<About />
</div>
                  <div ref={contact}>
                  <Contact />
                  </div>
                   







                </div>








            </div>





        </div>
    );
}

export default Right;