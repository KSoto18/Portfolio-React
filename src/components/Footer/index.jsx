import React from 'react';

import './styles.css';

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";


const Footer = () => {

    return (

        <div className='footer'> 
            <div className='buttons'>
            <a href='https://github.com/KSoto18' target='new' className='footerBtn'><BsGithub /></a>
            <a href='www.linkedin.com/in/khris-soto-9468a6259' target='new' className='footerBtn'><BsLinkedin /></a>
            <a href='https://www.instagram.com/kaptsprinkles/?igshid=OGQ5ZDc2ODk2ZA%3D%3D&utm_source=qr' target='new' className='footerBtn'><BsInstagram /></a>
        </div>

            <p className='footer-text'> Ⓒ KSoto18 2023</p>
            <p className='updateText' style={{fontSize: "12px", color: "white", textAlign: "center"}}>Updated: 05/2023</p>

        </div>

    );
};

export default Footer;