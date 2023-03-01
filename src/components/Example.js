import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/example.css'
import image1 from '../Images/image1.png'
import image2 from '../Images/image2.png'
import image3 from '../Images/image3.png'
import image4 from '../Images/image4.png'
import image5 from '../Images/image5.png'
import image6 from '../Images/image6.png'
import image20 from '../Images/image20.png'

const images=[
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image20
]
const divStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '100px'
    }
const divStyleTwo = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundSize: 'cover',
    height: '300px'
    }
    const responsiveSettings = [
{
    breakpoint: 600,
    settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
    }
},
{
    breakpoint: 500,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
},
{
    breakpoint: 200,
    settings: {
        slidesToShow: 1,
        slidesToScroll: 1
    }
},
];
export default class Example extends Component{
    render(){
    var w = window.innerWidth;
    return (
        <div className='scrollBox'>
            <Slide slidesToScroll={1} slidesToShow={3} indicators={false} responsive={responsiveSettings}>
            {images.map((image, index)=> (
            <div key={index}>
              <div style={{ ...divStyleTwo, 'backgroundImage': `url(${image})`, 'height':`${( w<600)? ('200px'):('300px')}`,'margin':'10px', 'zIndex':'-1'}}>
              </div>
            </div>
          ))} 
            </Slide>
        </div>
    );}
};