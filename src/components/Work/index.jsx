import React, { useState } from 'react';

function Work(props) {

    const [isShown, setIsShown] = useState(false);

    return (

        <div>

            <div onMouseEnter={() => setIsShown(true)}
                 onMouseLeave={() => setIsShown(false)} >

                <img src={props.img} alt={props.title} />

            </div>

            { isShown && (

                <div>
                    <h2>
                        <a target="new" href={props.link}>{props.title}</a>
                        <p><a target="new" href={props.repo}>GitHub Repository</a></p>
                    </h2>

                </div>
            ) }

        </div>

    )
}

export default Work;