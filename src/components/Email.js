import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import{ init } from '@emailjs/browser';
import '../css/email.css'

init("user_W7CsbdW7BGSlDGi4rbGca");

export const ContactUs = () => {

  const form = useRef();
  const [name, setName] = useState('')
  const [user, setUser] = useState('')
  const [message, setMessage] = useState('')
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_1psuwpf', 'template_z658s7j', form.current, 'user_W7CsbdW7BGSlDGi4rbGca')
      .then((result) => {
        setName('')
        setUser('')
        setMessage('')
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className='error'></div>
      <input className='inputs' type="text" name="user_name" placeholder='Name'
        onChange={event => setName(event.target.value)}
        value={name}/>
      <div className='error'></div>
      <input className='inputs' type="email" name="user_email" placeholder='E-mail'
      onChange={event => setUser(event.target.value)}
      value={user}/>
      <div className='error'></div>
      <textarea name="message" placeholder='What can we do for you?'
      onChange={event => setMessage(event.target.value)}
      value={message}/>
      <div className='inputbox'><input  className='button'type="submit" value="Send" /></div>
    </form>
  );
};