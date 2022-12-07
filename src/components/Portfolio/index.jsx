import React from 'react';

import Work from '../Work'

import PokewireImg from '../../assets/PokéWire.gif'
import NovelSips from '../../assets/Novel-Sips.jpg'


const Portfolio = () => {

        const work = [
                {
                  title: 'PokeWire',
                  description: 'Search for the locations of your favorite Pokemons!',
                  link: " ",
                  repo: " ",
                  img: PokewireImg

                }
        ];

        return (

                <section>

                     <h2>Portfolio</h2>

                        <div >
                         
                         {work.map((work) => {
                            return <Work 
                               title={work.title}
                               description={work.description}
                               id={work.id}
                               link={work.link}
                               repo={work.repo}
                               img={work.img}
                          />
})}
 

                        </div>

                </section>


        );
};

export default Portfolio;