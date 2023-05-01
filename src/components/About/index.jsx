// Main Imports
import React from 'react';

// Styling
import './styles.css';


const About = () => {
    return (
        <section className='aboutMe'>

            <img className='pictureBox' src='https://avatars.githubusercontent.com/u/113643158?v=4'></img>

            <div className='aboutContainer' style={{ width: "80%", textAlign: "center" }}>

                <div className='about-me-text'>

                    <p> Hey there! My name is Khris Soto. Thank you for taking the time to look over my portfolio. Here you will find some information about me and the projects I have worked on or contributed to.</p>

                    <p>I lived in Puerto Rico for the first 20 years of my life before moving to Orlando, Florida in 2009. Living in Orlando has been a dream of mine since I first visited with my family back when I was young. After obtaining my High School diploma I attended the Interamerican University of PR's Computer Science program for 2 years. During this time the oportunity to moved to Orlando was presented, and I took it. I was able to have a very rewarding career in the service industry but I still felt like I wanted more. Thats when I found the UCF Full-Stack Coding Bootcamp.</p>

                    <p>During the Bootcamp I was able to enhance some of the skills I had learn and also obtain new ones. This program was focused in learning MERN and all of its areas.</p>

                </div>

            </div>

        </section>

    );
};

export default About;