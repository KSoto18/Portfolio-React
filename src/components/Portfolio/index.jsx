import React from 'react';

import './styles.css';

import Work from '../Work';

import PokewireImg from '../../assets/PokéWire.gif';
import NovelSips from '../../assets/Novel-Sips.jpg';
import Employee from '../../assets/EmployeeTracker.jpg';
import TeamBuilder from '../../assets/TeamBuilder.jpg';
import Weather from '../../assets/WeatherDashboard.gif';


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
        ];

        return (

                <section>

                        <h2 className='title'>Portfolio</h2>

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