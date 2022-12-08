import React from 'react';

import './styles.css';

import { BsMailbox} from "react-icons/bs";

const Contact = () => {

    return (

        <div> 
            
            <p className='title' style={{marginTop: "20px"}}>Send me a message!</p>

            <form className='contact-form' style={{alignItems: "center", marginTop: "50px"}}>

                <div className="form-group">
                    <label htmlFor="name" placeholder='Rocket Raccoon'>Name: </label>
                    <input type="text" className="form-control" placeholder='Rocket Raccoon' />
                </div>

                <div className="form-group">
                    <label htmlFor="exampleInputEmail1">Email: </label>
                    <input type="email" className="form-control" placeholder='Rocket@email.com'  aria-describedby="emailHelp" />
                </div>

                <div className="form-group">
                    <label htmlFor="message">Message: </label>
                    <textarea className="form-control" rows="5" placeholder='You are awesome!' ></textarea>
                </div>

                <button type="submit" style={{fontSize: '20px'}} className="btn">Send!</button>

            </form>


            <div className='emailMe'>
                <p> Email Me Directly </p>
                <a className='contactBtn' target='new' href='mailto:Khris.Soto@live.com'><BsMailbox /></a>   
            </div>


        </div>

    );
};

export default Contact;