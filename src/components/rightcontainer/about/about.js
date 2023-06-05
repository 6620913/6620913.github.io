import React from 'react';


import '../../rightcontainer/about/about.css';






function About() {


  return (
  
    <div id='about' className='About'>

    <div className='content'>


        <div className='about-content'>
            <div className='aboutclass'>
                <p >About/{'>'}</p>

                <span className='b'>class</span> <span className='y'>Neeraj </span>{'{'}
                <span className='indentation'>..</span> <p>//class containing info about me</p>

                <span className='indentation'>..</span> <span className='b'> constructor</span>{'() {'}<br />
                <span className='indentation'>......</span> <span className='r'>this{'.'}</span><span className='g'>name</span><span className='r'>=</span>
                <span className='g'>'Neeraj'</span><br />
                <span className='indentation'>......</span> <span className='r'>this{'.'}</span><span className='g'>email</span><span className='r'>=</span>
                <span className='g'>'6620913@gmail.com'</span><br />
                {'}'}<br />

                <span className='indentation'>..</span> <span className='y'>workExperience </span>{'() {'}<br />

                <span className='indentation'>......</span><span className='b'>return</span>{'['}<br />
                <span className='indentation'>......</span>{'{'}<span className='g'>'Mar2022-Apr2022'</span>:<span className='g'>'Web Development intern: At techonTech PVT.LTD made a company website usig django as backend and html css as frontend'</span>{'}'}<br />

                <span className='indentation'>..</span> <span className='y'>education </span>{'() {'}<br />

                <span className='indentation'>....</span><span className='b'>return</span>{'['}<br />
                <span className='indentation'>......</span> {'{'}<span className='g'>'2016-2017'</span>:<span className='g'>'10th class from JNV Jaffarpur kalan, cbse Board with 10 CGPA'</span>{'},'}<br />
                <span className='indentation'>......</span> {'{'}<span className='g'>'2018-2019'</span>:<span className='g'>'12th class from  JNV Jaffarpur kalan, cbse Board with 83.6 %'</span>{'},'}<br />
                <span className='indentation'>......</span> {'{'}<span className='g'>'2019-2020'</span>:<span className='g'>'Drop for JEE from CSRL super 30 noida, get 54k CRL in JEE Mains'</span>{'},'}<br />
                <span className='indentation'>......</span> {'{'}<span className='g'>'2020-now'</span>:<span className='g'>'B.Tech in Ellectrical Engineering from Netaji subhas university of technology, CGPA = 7.54(5 sem)'</span>{'}'}<br />
                {']'}<br />
                {'}'}<br />

                <span className='indentation'>..</span> <span className='y'>skills </span>{'() {'}<br />

                <span className='indentation'>....</span> <span className='b'>return</span>{'['}<br />
                <span className='indentation'>......</span> <span className='g'> 'Data structure and Algorithms', 'HTML/CSS/JS', 'React.js', 'GIT', 'Django', 'Full stack web Development', 'Deep learning'</span>
                {']'}<br />
                {'}'}<br />

                <span className='indentation'>..</span> <span className='y'>programingLanguages </span>{'() {'}<br />

                <span className='indentation'>....</span> <span className='b'>return</span>{'['}<br />
                <span className='indentation'>......</span> <span className='g'> 'Java','Python','C'</span>
                {']'}<br />
                {'}'}<br />
                {'}'}













            </div>

        </div>



    </div>

</div>
  );
}

export default About;