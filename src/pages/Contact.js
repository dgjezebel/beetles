import React from 'react';
import {ContactUs} from '../components/Email'
import '../css/email.css'

export default class Contact extends React.Component {
    render(){
        return(
        <div className='height'>
            <div className='contactDiv'>
                <div className='contactGreeting'>
                    <p>Phone number:{' '}<a href="tel:215-792-2197" >(215) 792-2197</a></p>
                    <p>Email:{' '}<a href="mailto:customerservice@ab-catering.com">customerservice@ab-catering.com</a></p>
                    <br/>
                    <p>
                    Feel free to send 
                    us any comments or questions and we'll get 
                    back to you within 24 hours. We look forward to working with you!
                    </p>
                </div>
            
                <div className='formholder'>
                <ContactUs />
                </div>
            </div>
        </div>
        )
    }
}