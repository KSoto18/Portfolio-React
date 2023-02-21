import React from 'react';

import './styles.css';


export function OpeningTitle() {

    return (

        <div className='titleBox'>

            <h1 class="animate__animated animate__bounceInLeft"> Khris Soto </h1>
            <h1 class="animate__animated animate__bounceInRight"> Web Developer </h1>


        </div>


    );
};


export function TitleAway() {

    return (

        <div className='titleBox'>

            <h1 class="animate__animated animate__bounceOutUp"> Khris Soto </h1>
            <h1 class="animate__animated animate__bounceOutDown"> Web Developer </h1>

        </div>
    )


}