import { useRef } from 'react';

import './styles.css';

import { BsMailbox } from "react-icons/bs";

const Contact = () => {

    const form = useRef();

    const sendEmail = () => {};

    return (

        <div>

            <p className='title' style={{ marginTop: "3rem", marginBottom: "3rem" }}>Send me a message!</p>

            <form ref={form} onSubmit={sendEmail}
                className='contact-form' style={{ alignItems: "center", marginTop: "50px" }}
                method="POST">

                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="form-control" placeholder='Your Name' required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" placeholder='Rocket@email.com' required />
                </div>

                <div className="form-group">
                    <label htmlFor="subject">Subject: </label>
                    <input type="text" className="form-control" rows="5" placeholder='You are awesome!' name="subject" required></input>
                </div>

                <div className="form-group">
                    <label htmlFor="message">Messaje: </label>
                    <textarea name="message" className="form-control" rows="5" placeholder='You are awesome!' required></textarea>
                </div>

                <button type="submit" style={{ fontSize: '20px' }} className="btn">Send!</button>

            </form>


            <div className='emailMe'>
                <p> Email Me Directly </p>
                <a className='contactBtn' target='new' href='mailto:Khris.Soto@live.com'><BsMailbox /></a>
            </div>


        </div>

    );
};

export default Contact;