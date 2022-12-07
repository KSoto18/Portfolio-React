import React from 'react';

const Nav = ({ showAbout, showPortfolio, showContact, showResume }) => {

    return (

        <div className='mainElement'>
        
           <nav>
            <h1 onClick={showAbout}>ABOUT</h1>
            <h1 onClick={showPortfolio}>PORTFOLIO</h1>
            <h1 onClick={showContact}>CONTACT</h1>
            <h1 onClick={showResume}>RESUME</h1>
           </nav>

        </div>



    );
};

export default Nav;