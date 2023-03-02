import React from 'react';
import '../css/foodcart.css'

export default class WinterCart extends React.Component {
    render(){
        return(
            <div className='foodtruckBackground'>
                <h1>WINTER FOOD TRUCK MENU</h1>
                <br/>
                <h2>BURGERS</h2>
                <p>5.5 oz Cheeseburger $6 / Double Cheeseburger $11</p>
                <br/>
                <h2>HOTDOGS</h2>
                <p>Hot Dog - includes sauerkraut and/or onion $3</p>
                <br/>
                <h2>SANDWICHES</h2>
                <p>Hot Sausage $4</p>
                <p>Mild Italian Sausage $4 (6” roll)</p>
                <p>Meatball Parm Sandwich $6 (6” roll)</p>
                <p>Cheesesteak $6 (6” roll)</p>
                <p>Pizza Steak $6 (6” roll)</p>
                <br/>
                <h2>MAC &amp; CHEESE</h2>
                <p>Mac &amp; Cheese $5 / with 2 meatballs or Cheesesteak meat $6</p>
                <br/>
                <h2>SOUTH OF THE BORDER</h2>
                <p>Walking Taco $5</p>
                <p>**Add Bacon to any order for $1 more**</p>
                <br/>
                <h2>SIDES</h2>
                <p>Chips / Cracker Jacks $1</p>
                <br/>
                <h2>DESSERT</h2>
                <p>Cookies $2</p>
                <br/>
                <h2>BEVERAGES</h2>
                <p>Soda / Water / Gatorade $2</p>
            </div>
        )

    }
}