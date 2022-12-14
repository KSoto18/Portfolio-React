import React, { useState } from 'react';

// import './App.css'

import Nav from '../components/Nav';
import About from '../components/About';
import Contact from '../components/Contact';
import Portfolio from '../components/Portfolio';
import Resume from '../components/Resume';


function Body() {

  const [pageIndex, setPageIndex] = useState(0);

  return (

    <div className='body'>
      <Nav 
         showAbout={() => setPageIndex(0)}
         showPortfolio={() => setPageIndex(1)}
         showContact={() => setPageIndex(2)}
         showResume={() => setPageIndex(3)}
         />
         {pageIndex === 0 ? (
          <About />
         ) : pageIndex === 1 ? (
          <Portfolio />
         ) : pageIndex === 2 ? (
          <Contact />
         ) : pageIndex === 3 ? (
          <Resume />
         ) : (
          <About />
         )}
    </div>
  );
}

export default Body;