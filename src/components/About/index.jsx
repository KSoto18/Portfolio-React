// Main Imports
import React from 'react';

// Styling
import './styles.css';


const About = () => {
    return (
        <section className='aboutMe'>

            <img className='pictureBox' src='https://media.licdn.com/dms/image/D4E03AQGbvCE02Sq-tA/profile-displayphoto-shrink_200_200/0/1675455084712?e=1688601600&v=beta&t=SlPY2WvuY9ZJFNDrMA63AMNJSzHgLTLkByGH036fj5o'></img>

            <div className='aboutContainer' style={{ width: "80%", textAlign: "center" }}>

                <div className='about-me-text'>

                    <p>Hello!</p>

                    <p>My name is Khris Soto. </p>

                    <p>I am a certified Full Stack Web Develper from Orlando, FL. </p>

                    <p> Coming from a background in Hospitality and Service of over 10 years, I look to combine my passion for technology and design with my experiences to make eye-catching, user-friendly, and accesible websites and applications.</p>

                    <p>I have recieved my education from the UCF Full Stack Web Development Program in December of 2022. While my education was focused on the MERN Stack I am still exploring other technologies and frameworks that catch my interest.</p>

                    <p>Thank you for taking the time to look over my portfolio!</p>

                </div>

            </div>

        </section>

    );
};

export default About;