import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'


export default class Header extends Component {
    container = React.createRef();
    state = {
        open: false,
      };
    handleButtonClick = () => {
        this.setState((state) => {
        return {
            open: !state.open,
        };
        });
    };
    handleClickOutside = (event) => {
        if (
        this.container.current &&
        !this.container.current.contains(event.target)
        ){
            this.setState({
            open: false,
        });
        }
    };
    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }
    render() {
        return (
            <div className="App">
                
                <div className="container" ref={this.container}>
                    <button type="button" className="button" onClick={this.handleButtonClick}>
                        Menus
                    </button>
                    {this.state.open && (
                    <div className="dropdown">
                        <ul>
                            <li><Link>Food Cart Menu</Link></li>
                            <li><Link>Catering Menu</Link></li>
                        </ul>
                    </div>
                    )}
                </div>
                <button type="button" className="button">Gallery</button>
                <button type="button" className="button">About</button>
                <button type="button" className="button">Contact</button>
            </div>
        );
    }
}
