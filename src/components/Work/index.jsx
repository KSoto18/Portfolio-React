import React, { useState } from 'react';

import './styles.css';

import { BsGithub } from "react-icons/bs";

function Work(props) {

    const [isShown, setIsShown] = useState(false);

    return (

        <div>

            <div onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)} >

                <img style={{width: '525px'}} src={props.img} alt={props.title} />

            </div>

            { isShown && (

                <div className='workInfo'>
                    <h2>
                        <a target="new" href={props.link}>{props.title}</a>
                        <p><a target="new" href={props.repo}><BsGithub /> Repo</a></p>
                    </h2>

                </div>
            ) }

        </div>

    )
}

export default Work;