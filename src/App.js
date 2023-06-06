
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/pages/Home'
import ProjectsPage from './components/pages/projects';
import AboutPage from './components/pages/about';
import ContactPage from './components/pages/contact';
import { render } from '@testing-library/react';

function App() {
  return (
    <Router>
      <>
       
        <Routes basename={process.env.PUBLIC_URL}>
          
          <Route  path="/" element={<Home/> } />
          <Route  path="/projects" element={<ProjectsPage/> } />
          <Route  path="/about" element={<AboutPage/> } />
          <Route  path="/contact" element={<ContactPage/> } />
         
        </Routes>
      </>
    </Router>
  );
}

export default App;
