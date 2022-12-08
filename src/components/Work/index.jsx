import React, { useState } from 'react';

import './styles.css';

import { BsGithub } from "react-icons/bs";
import { BsLink} from "react-icons/bs";

function Work(props) {

    const [isShown, setIsShown] = useState(false);

    return (

        <div>

            <div onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)} >

                <img style={{width: '525px'}} src={props.img} alt={props.title} />

            </div>

            { isShown && (

                <div className='workInfo' onMouseEnter={() => setIsShown(true)}
                onMouseLeave={() => setIsShown(false)}>
                    <h2>
                        <p><a target="new" href={props.link}><BsLink /></a></p>
                        <p><a target="new" href={props.repo}><BsGithub /></a></p>
                    </h2>

                </div>
            ) }

        </div>

    )
}

export default Work;