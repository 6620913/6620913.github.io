import React from 'react';

import './navbar.css'

import { HashLink as Link } from 'react-router-hash-link';

function Navbar() {








  return (
    <div className='navclass' >
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"> <Link to='/' style={{ textDecoration: 'none',color:'black' }}>
							Welcome
						</Link></a>
       
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            
            <a className="nav-item nav-link active" href="#">
            <Link to='/'>
							Home
						</Link>
             <span class="sr-only">(current)</span></a>
            <a className="nav-item nav-link" href="#">
            <Link to='/projects'>
							Projects
						</Link>
            </a>
            <a className="nav-item nav-link" href="#">
            <Link to='/about'>
							About
						</Link>
            </a>
            <a className="nav-item nav-link " href="#">
            <Link to='/contact'>
							Contact
						</Link>
            </a>
          </div>
        </div>
      </nav>



    </div>
  );
}

export default Navbar;