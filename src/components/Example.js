import React, { Component } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import '../css/example.css'
import christmasspread from '../Images/christmasspread.png'
import meatballs from '../Images/meatballs.png'
import spinachdip from '../Images/spinachdip.png'
import potatoes from '../Images/potatoes.png'
import froot from '../Images/froot.png'
import pastasalad from '../Images/pastasalad.png'
import taco from '../Images/taco.png'

const images=[
    christmasspread,
    meatballs,
    spinachdip,
    potatoes,
    froot,
    pastasalad,
    taco
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
            breakpoint: 1200,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
{
    breakpoint: 700,
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