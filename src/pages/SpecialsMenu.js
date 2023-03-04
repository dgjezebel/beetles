import React from "react";
import Spinner from "../components/Spinner";
import '../css/spinner.css';

export default function SpecialsMenu(){
    return(<>
        <div className='specialsDiv'>
            <h2>Check back later for new specials!</h2>
        <div className='spinner'><Spinner/></div>
        </div>
    </>
    )
}