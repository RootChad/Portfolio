import React, { useRef, useState} from 'react';
import { Vortex } from 'react-loader-spinner'
import emailjs from 'emailjs-com';
import "../css/contact.css"
function Contact() {
    const form = useRef();
    const [isSending, setIsSending] = useState(false);
    const sendEmail = (e) => {
        e.preventDefault();
        setIsSending(true);
        emailjs.sendForm('service_8dn2xax', 'template_hpy58hk', form.current, 'rUI4z0UErfsSo4pm8')
            .then((result) => {
                console.log(result.text);
                setIsSending(false);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <section className="contact container section" id="contact">
            <h2 className='section_title'>Get In Touch</h2>
            <div className="contact_container grid">
                <div className="contact_info">
                    <h3 className="contact_title">Let's talk about everything</h3>
                    <p className="contact_details">Don't like forms? Send me an email</p>
                </div>

                <form action="" className="contact_form" ref={form} onSubmit={sendEmail}>
                    <div className='contact_form-group'>
                        <div className='contact_form-div'>
                            <input type="text" name="name" className="contact_form-input" placeholder="Insert your name" required/>
                        </div>
                        <div className='contact_form-div'>
                            <input type="email" name="email" className="contact_form-input" placeholder="Insert your email" required/>
                        </div>

                    </div>
                    <div className='contact_form-div'>
                        <input type="subject" name="subject" className="contact_form-input" placeholder="Insert your subject" required/>
                    </div>
                    <div className='contact_form-div contact_form-area'>
                        <textarea name="msg" id="message" cols="20" rows="10" className="contact_form-input" placeholder="Write your message" required></textarea>
                    </div>

                    <button className='btn' disabled={isSending}>
                        Send Message                           
                    </button>
                    <Vortex
                        visible={isSending}
                        ariaLabel="vortex-loading"
                        wrapperStyle={{}}
                        wrapperClass="spinner"
                        colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
                        
                    />   

                </form>
               

            </div>
        </section>
    )
}

export default Contact