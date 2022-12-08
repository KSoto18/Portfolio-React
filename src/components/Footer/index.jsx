import React from 'react';

import './styles.css';

import { BsGithub } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";

const Footer = () => {

    return (

        <div className='footer-location'> 
            <div className='buttons'>
            <a href='https://github.com/KSoto18' target='new' className='footerBtn'><BsGithub /></a>
            <a href='https://www.linkedin.com/' target='new' className='footerBtn'><BsLinkedin /></a>
            <a href='https://www.instagram.com/kapt_sprinkles/?hl=en' target='new' className='footerBtn'><BsInstagram /></a>
        </div>
            <p className='footer-text'> Ⓒ KSoto18 2022</p>

        </div>

    );
};

export default Footer;