import React from 'react';


import '../../rightcontainer/intro/intro.css';

import { Typewriter } from 'react-simple-typewriter';
import robot from '../../../files/images/background/robot.png'


function Intro() {


    return (

        <div className='intro' >


            <div className='intro-content'>
                <p>Start/{'>'}</p>
                <div className='info'> Hi, My Name is <span className='sp'> Neeraj</span> </div>
                <div className='info'> I am a {' '}
                <div className='typing'>
                    <Typewriter
                        
                        words={['Full stack webdeveloper', 'Competitive coder', 'TechEnthusiast', 'Software developer']}
                        loop={Infinity}
                        cursor
                        cursorStyle='|'
                        typeSpeed={200}
                        deleteSpeed={70}
                        delaySpeed={10}

                    />
                    </div>

                </div>

                <div className='line'> I like coding because I just like it/{'>'}</div>




            </div>
            <div className='intro-img'>
                <img src={robot}></img>
            </div>




        </div>



    );
}

export default Intro;