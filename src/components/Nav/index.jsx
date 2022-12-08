import React from 'react';

import './styles.css';

const Nav = ({ showAbout, showPortfolio, showContact, showResume, active }) => {

    return (

        <div className='navBar'>
        
           <nav className='nav navBtn justify-content-end'>
            <h1 onClick={showAbout} className={active === 1 ? 'links active' : 'links'}>ABOUT</h1>
            <h1 onClick={showPortfolio} className={active === 1 ? 'links active' : 'links'}>PORTFOLIO</h1>
            <h1 onClick={showContact} className={active === 1 ? 'links active' : 'links'}>CONTACT</h1>
            <h1 onClick={showResume} className={active === 1 ? 'links active' : 'links'}>RESUME</h1>
           </nav>
           

        </div>



    );
};

export default Nav;