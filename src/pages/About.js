import React from "react";
import image from '../Images/ablogo.png'
import '../css/about.css'

export default function About(){
    
    return(
    <div className='abutdiv'>
<img className='image' src={image}/>
        <h1>About Our Company</h1>
        <div className='textdiv'>
        <p>With the world changing to a new normal, we decided to open AB Catering to bring comfort food directly to your table. Our mission 
        is to bring you the best homestyle cooking right to your door. We use only the freshest ingredients, and we add a little bit of love to everything we bake.</p>
        <br/>
<p>We are located in Philadelphia, PA. We serve Philadelphia and New Jersey, and offer free delivery within a 25-mile radius of our location. 
    We are always up for a challenge and welcome special requests!</p>
    <br/>
<p>We look forward to serving your next get together with family and friends.</p>
<br/>
<p>-sincerely, Al and Brandy.</p>
</div>
    </div>
    )
}