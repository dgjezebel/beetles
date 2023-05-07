import React from 'react';
import '../css/gallery.css'
import {images} from '../components/galleryDatabase'
export default class Gallery extends React.Component {
    render(){
        return(
            <div className='galleryDiv'>
                <img className='galleryimage' alt='' src={images[22]}/>
                <img className='galleryimage' alt='' src={images[21]}/>
                <img className='galleryimage' alt='' src={images[23]}/>
                <img className='galleryimage' alt='' src={images[24]}/>
                <img className='galleryimage' alt='' src={images[25]}/>
                <img className='galleryimage' alt='' src={images[16]}/>
                <img className='galleryimage' alt='' src={images[19]}/>
                <img className='galleryimage' alt='' src={images[13]}/>
                <img className='galleryimage' alt='' src={images[15]}/>
                <img className='galleryimage' alt='' src={images[5]}/>
                <img className='galleryimage' alt='' src={images[17]}/>
                <img className='galleryimage' alt='' src={images[3]}/>
                <img className='galleryimage' alt='' src={images[14]}/>
                <img className='galleryimage' alt='' src={images[4]}/>
                <img className='galleryimage' alt='' src={images[12]}/>
                <img className='galleryimage' alt='' src={images[0]}/>
                <img className='galleryimage' alt='' src={images[11]}/>
                <img className='galleryimage' alt='' src={images[6]}/>
                <img className='galleryimage' alt='' src={images[2]}/>
                <img className='galleryimage' alt='' src={images[10]}/>
                <img className='galleryimage' alt='' src={images[18]}/>
                <img className='galleryimage' alt='' src={images[8]}/>
                <img className='galleryimage' alt='' src={images[9]}/>
                <img className='galleryimage' alt='' src={images[1]}/>
                <img className='galleryimage' alt='' src={images[7]}/>

             
            </div>
        )

    }
}