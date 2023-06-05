import React from 'react';


import '../../rightcontainer/intro/intro.css';

import { Typewriter } from 'react-simple-typewriter';



function Intro() {


    return (

        <div className='intro' >
            <p>Start/{'>'}</p>
            <h1> Hi,My Name is <span className='sp'> Neeraj</span> </h1>
            <h1> I am a {' '}
                <Typewriter
                    words={['Full stack webdeveloper', 'Competitive coder', 'TechEnthusiast', 'Software developer']}
                    loop={Infinity}
                    cursor
                    cursorStyle='|'
                    typeSpeed={220}
                    deleteSpeed={220}
                    delaySpeed={10}

                />

            </h1>
            <p> I like coding because i just like it/{'>'}</p>

        </div>



    );
}

export default Intro;