import React from 'react';
import {ContactUs} from '../components/Email'
import '../css/email.css'

export default class Contact extends React.Component {
    render(){
        return(
        <div className='height'>
            <div className='contactDiv'>
                <div className='contactGreeting'>
                    <h2>Phone number:{' '}<a href="tel:215-792-2197" >(215) 792-2197</a></h2>
                    <h2>Email:{' '}<a href="mailto:customerservice@ab-catering.com">customerservice@ab-catering.com</a></h2>
                    <br/>
                    
            
                <div className='formholder'>
                </div>
                
                <ContactUs />
                </div>
            </div>
        </div>
        )
    }
}