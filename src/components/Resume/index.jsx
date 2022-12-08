import React from 'react';

import './styles.css'

import { BsCloudDownload } from "react-icons/bs";

import ResumeImg from '../../assets/Resume.jpg'

const Resume = () => {
return (

    <div className='resume'>

    <div class='resumeImg'>
        <img src={ResumeImg} style={{width: '350px'}}></img>
    </div>
     
     <div className='downloadlink'>
    <a target='new' href='https://docs.google.com/file/d/1M7PsPi8mJ33ZMtYsEwsgsDIWy7SsH1PrkVVe5jkm10o/view'>
    <BsCloudDownload /> Download</a>
    </div>
 
    </div>
);
};

export default Resume;