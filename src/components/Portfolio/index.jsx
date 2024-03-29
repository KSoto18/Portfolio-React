import React from 'react';

import './styles.css';

import Work from '../Work';

import PokewireImg from '../../assets/PokeWire.jpg';
import NovelSips from '../../assets/Novel-Sips.jpg';
import Employee from '../../assets/EmployeeTracker.jpg';
import TeamBuilder from '../../assets/TeamBuilder.jpg';
import Weather from '../../assets/WeatherDashboard.gif';
import Haunted from '../../assets/haunted_holidays.gif'
import Wmw from '../../assets/pkmn-wmw.jpg';


const Portfolio = () => {

        const work = [
                {
                        title: 'PokeWire',
                        description: 'Search for the locations of your favorite Pokemons!',
                        link: "https://luckysal.github.io/pokewire/",
                        repo: "https://github.com/LuckySal/pokewire",
                        img: PokewireImg

                },

                {
                        title: 'Haunted Holidays',
                        description: 'React application with MongoDB Atlas database.',
                        link: "https://boiling-ridge-27905.herokuapp.com/hauntedlocations",
                        repo: "https://github.com/KSoto18/Haunted-Holidays",
                        img:  Haunted
                },

                {
                        title: 'Novel Sips',
                        description: 'Pair a book with a drink',
                        link: "https://young-gorge-24694.herokuapp.com/",
                        repo: "https://github.com/mmllively/Novel_Sips",
                        img: NovelSips

                },

                {
                        title: 'Weather Board',
                        description: 'Check the weather application!',
                        link: "https://ksoto18.github.io/Weather-Dash/",
                        repo: "https://github.com/KSoto18/Weather-Dash",
                        img: Weather

                },

                {
                        title: 'Tracker',
                        description: 'Backend application that helps build your work roster.',
                        link: "Download from Repo",
                        repo: "https://github.com/KSoto18/Employee-Tracker",
                        img: Employee

                },

                {
                        title: 'Team Builder',
                        description: 'Backend application that helps build a roster for a work team onto the browser.',
                        link: "Download from Repo",
                        repo: "https://github.com/KSoto18/My-Team-Builder",
                        img:  TeamBuilder

                },

                {
                        title: 'PKMN: Whats my Weakness?',
                        description: 'Front-end application that find the weakness of a PKMN type.',
                        link: "https://ksoto18.github.io/pkmn-wmw/",
                        repo: "https://github.com/KSoto18/pkmn-wmw",
                        img:  Wmw

                },

        ];

        return (

                <section>
                         <div className='title'>
                        <h2>Portfolio</h2>
                        <p>Here you will find some projects that I have worked on or contributed to.</p>
                        </div>

                        <div className='workContainer'>

                                {work.map((work) => {
                                        return <div className='workCard'><Work
                                                title={work.title}
                                                description={work.description}
                                                id={work.id}
                                                link={work.link} 
                                                repo={work.repo}
                                                img={work.img}
                                        />
                                        </div>
                                })}


                        </div>

                </section>


        );
};

export default Portfolio;