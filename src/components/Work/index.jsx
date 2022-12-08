import React, { useState } from 'react';

import './styles.css';

function Work(props) {

    const [isShown, setIsShown] = useState(false);

    return (

        <div>

            <div>

                <img style={{width: '525px'}} src={props.img} alt={props.title} />

            </div>


                <div className='workInfo'>
                    <h2>
                        <a target="new" href={props.link}>{props.title}</a>
                        <a className='repo' target="new" href={props.repo}>GitHub Repository</a>
                    </h2>

                </div>

                
         

            
        </div>

    )
}

export default Work;