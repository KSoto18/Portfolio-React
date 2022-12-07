import React from 'react';

import PokewireImg from '../../assets/PokéWire.gif'
import NovelSips from '../../assets/Novel-Sips.jpg'


const Portfolio = ({ pokewire }) => {
    return (

        <section> PORTFOLIO

            <div >  
                    <img src={PokewireImg}></img>
                    <a target='new' href='https://luckysal.github.io/pokewire/'>PokeWire</a>
            </div>

            <div >
                    <img src={NovelSips}></img>
                    <a target='new' href='https://young-gorge-24694.herokuapp.com/'>Novel-Sips</a>
            </div>

            <div >
                    <a target='new' href=' '>OTHER</a>
            </div>

            <div >
                    <a target='new' href=' '>OTHER</a>
            </div>




        </section>


    );
};

export default Portfolio;