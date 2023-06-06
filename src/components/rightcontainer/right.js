


import '../../style/css/right.css';

import Navbar from './navbar/navbar';
import Projects from './projects/projects';
import About from './about/about';
import Contact from './contact/contact';
import Intro from './intro/intro';



import { useRef } from "react";



function Right() {


    // const home = useRef(null);
    // const about = useRef(null);
    // const contact = useRef(null);
    // const projects = useRef(null);



    // const scrollToSection = (elementRef) => {
    //     window.scrollTo({
    //         top: elementRef.current.offsetTop,
    //         behavior: 'smooth'
    //     })
    // }


    return (

        <div>

            <div className="rightcontainer">
                <div className='container'>

                    <Navbar/>

                    <div >
                        < Intro />
                    </div>
                    {/* <div  >
                        < Projects />
                    </div>

                    <div >
                        <About />
                    </div>
                    <div >
                        <Contact />
                    </div>
 */}
                </div>
            </div>
        </div>
    );
}

export default Right;