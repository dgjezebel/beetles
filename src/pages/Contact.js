import React from 'react';
import {ContactUs} from '../components/Email'
import '../css/email.css'
import { Link } from 'react-router-dom';
import insta from '../Images/instapng.png'
import fb from '../Images/fbpng.png'

export default class Contact extends React.Component {
    render(){
        return(
            <div className='height'>
                    <h2>Phone number:{' '}<a href="tel:215-792-2197" >(215) 792-2197</a></h2>
                    <h2>Email:{' '}<a href="mailto:customerservice@ab-catering.com">customerservice@ab-catering.com</a></h2>
                    <h2>Follow us on Facebook and Instagram </h2>
                    <Link to='https://facebook.com/abcatering028072' target="_blank" rel="noopener noreferrer"><img className='iconssmall' alt='facebook'src={fb}/></Link>
                    <Link to='https://instagram.com/abcatering028072' target="_blank" rel="noopener noreferrer"><img className='iconssmall'alt='instagram'src={insta}/></Link>
                    <div className='formholder'>
                    </div>
                    <ContactUs />
            </div>
        )
    }
}