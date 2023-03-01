import React from 'react';
import Example from '../components/Example';
import '../css/home.css'
import { Link } from 'react-router-dom';

export default function Home(){
    return (<>
    <div className='homeDiv'><Example/></div>
    <div className='textDiv'>
        <p>Serving Philadelphia and New Jersey!</p>
        <br/>
        <p>Our mission is to bring you the best homestyle cooking right to your table. 
        We use only the freshest ingredients, and we add a little bit of love to everything we bake. </p>
        <br/>
<p>Contact us and we'll be happy to host your next event!</p></div>
<button className='pagebutton'><Link to='/contact'>Contact</Link></button>
    </>
    )
}