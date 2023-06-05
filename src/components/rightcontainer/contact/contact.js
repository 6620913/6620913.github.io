import React from 'react';


import '../../rightcontainer/contact/contact.css';

import linkdin from '../../../files/images/linkedin.png'
import github from '../../../files/images/github.png'
import gmail from '../../../files/images/gmail.png'




function Contact() {


    return (


        <div id='contact' className='contact'>

            <div className='content'>

                <p >Contact/{'>'}</p>

                <div className='contactinfo'>
                    <h4 >Find me on</h4>


                    <div className='contact-row'>

                        <div className='row1'>
                            <div className='ctxt'>
                                <div className='clogo'>
                                    <img className='cimg' src={linkdin} />
                                </div>
                                <div className='clink'>
                                    LinkedIn
                                </div>
                            </div>
                            <div className='ctxt'>

                                <div className='clogo'>
                                    <img className='cimg' src={github} />
                                </div>
                                <div className='clink'>
                                    Github:
                                </div>

                            </div>
                            <div className='ctxt'>
                                <div className='clogo'>
                                    <img className='cimg' src={gmail} />
                                </div>
                                <div className='clink'>
                                    Gmail
                                </div>
                            </div>



                        </div>


                    </div>
                    <div className='copyright'>	&#169; Neeraj 2023 </div>




                </div>


            </div>



        </div>
    );
}

export default Contact;