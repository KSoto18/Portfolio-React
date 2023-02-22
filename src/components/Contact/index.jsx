import { useRef } from 'react';
import emailjs from '@emailjs/browser';

import './styles.css';

import { BsMailbox } from "react-icons/bs";

const Contact = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_1n26948', 'template_vl1lxuo', form.current, 'b48QqJ4EVb-E_mm6c')
          .then((result) => {
              console.log("Message successfully sent!");
          }, (error) => {
              console.log("Uh Oh, something went wrong!");
          });

          e.target.reset()
      };

    return (

        <div>

            <p className='title' style={{ marginTop: "3rem", marginBottom: "3rem" }}>Send me a message!</p>

            <form ref={form} onSubmit={sendEmail}
                className='contact-form' style={{ alignItems: "center", marginTop: "50px" }}
                method="POST">

                <div className="form-group">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="form-control" placeholder='Your Name' name="user_name" required />
                </div>

                <div className="form-group">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" placeholder='Rocket@email.com' name="user_email" required />
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