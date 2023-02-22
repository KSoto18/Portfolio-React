import React from 'react';

import './styles.css';


export function OpeningTitle() {

    return (

        <div className='titleBackground'>

            <div className='titleBox'>

                <h1 className="animate__animated animate__lightSpeedInRight"> Khris Soto </h1>
                <h1 className="animate__animated animate__lightSpeedInLeft"> Web Developer </h1>


            </div>
        </div>

    );
};


export function TitleAway() {

    return (

        <div className='titleBackground'>

            <div className='titleBox'>

                <h1 className="animate__animated animate__fadeOutUp"> Khris Soto </h1>
                <h1 className="animate__animated animate__fadeOutDown"> Web Developer </h1>


            </div>
        </div>
    )


}