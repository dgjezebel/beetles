import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import '../css/email.css'

init("user_W7CsbdW7BGSlDGi4rbGca");

export const ContactUs = () => {

  const form = useRef();
  const [firstname, setFirstName] = useState('')
  const [lastname, setLastName] = useState('')
  const [user, setUser] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1psuwpf', 'template_z658s7j', form.current, 'user_W7CsbdW7BGSlDGi4rbGca')
      .then((result) => {
        setFirstName('')
        setLastName('')
        setUser('')
        setPhone('')
        setMessage('')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
    <form className='form' ref={form} onSubmit={sendEmail}>
      <h2>Contact us!</h2>
      <br/>
        <p>
        Questions? Send us a message and we'll get back to you as soon as possible. We look forward to working with you!
        </p>
        <br/>
      <div className='error'></div>
      <div className='emailphonediv'>
      <input 
        required 
        className='nameinputs' 
        type="text" 
        name="user_name" 
        placeholder='First Name*'
        onChange={event => setFirstName(event.target.value)}
        value={firstname}/>
      <div className='error'></div>
      <input 
        required 
        className='nameinputs' 
        type="text" 
        name="user_name" 
        placeholder='Last Name*'
        onChange={event => setLastName(event.target.value)}
        value={lastname}/>
      <div className='error'></div>
      </div>
      <div className='namediv'>
      <input 
        required 
        className='inputs' 
        type="email" 
        name="user_email" 
        placeholder='E-mail*'
        onChange={event => setUser(event.target.value)}
        value={user}/>
      <div className='error'></div>
      <input 
        required 
        className='inputs' 
        type="phone" 
        name="phone" 
        placeholder='Phone Number'
        onChange={event => setPhone(event.target.value)}
        value={phone}/>
      <div className='error'></div>
      </div>
      <textarea 
        required 
        className='textarea' 
        name="message" 
        placeholder='What can we do for you?*'
        onChange={event => setMessage(event.target.value)}
        value={message}/>
      <div className='inputbox'><input  className='inputbutton'type="submit" value="Send Message" /></div>
    </form>
  );
};