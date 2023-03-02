import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../css/header.css'
import headerimage from '../Images/ablogoheader-02.png';
import '../css/hamburger.css';
import HamburgerOpen from './HamburgerOpen';
import Hamburger from './Hamburger';

export default class Header extends Component {
    container = React.createRef();
    state = {
        open: false,
        isOpen:false,
        display:'none',
        isDesktop: false,
        body:document.body.style.overflow = "",
        menusOpen: false,
        dropdown:false
      };
      
      componentDidMount() {
        this.updatePredicate();
        document.addEventListener("mousedown", this.handleClickOutside);
        window.addEventListener("resize", this.updatePredicate);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
        window.removeEventListener("resize", this.updatePredicate);
    }open = () => {
        this.setState({
            display:this.state.isOpen ? 'inline': 'none',
        })
    }
    closeMenu = () =>{
        this.setState({
            display:'none',
            isOpen:false,
            body:document.body.style.overflow = "",
            menusOpen:false
        })
    }
    twoMenus = () =>{
        this.setState({
            menusOpen:!this.state.menusOpen
        })
        
    }
    dropdown = () =>{
        this.setState({
            dropdown:!this.state.dropdown
        })
    }
    popupmenu = () =>{
        this.setState({ 
            isOpen:!this.state.isOpen, 
            body:this.state.isOpen ? document.body.style.overflow = "": document.body.style.overflow = "hidden",
            menusOpen:this.state.isOpen ? true:false
        }, () => this.open())
        this.updatePredicate = this.updatePredicate.bind(this);}
      
    
      updatePredicate = () => {
        this.setState({ isDesktop: window.innerWidth < 800 });
      }
    


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
    
    render() {
        const isDesktop = this.state.isDesktop;
        const isOpen = this.state.isOpen;
        let w = window.innerWidth
        return (<>
            {isDesktop ? (
                <div className='header'>
                <Link to=''><img className='headerimage' src={headerimage} alt='ab catering' /></Link>
                <div className='navigation'  >
                    <ul style={{display:this.state.display}}>
                        <li> <Link className='linkbutton' to='' onClick={this.twoMenus}>Menus </Link></li>
                        {this.state.menusOpen? (
                            <li><Link className='linkbutton color' to='/cateringmenu' onClick={this.closeMenu}>Catering Menu</Link></li>):('')}
                            {this.state.menusOpen? (
                            <li><Link className='linkbutton color' to='/foodtruckmenu' onClick={this.closeMenu}>Food Truck Menu</Link></li>):('')}
                        <li><Link className='linkbutton' to='/gallery' onClick={this.closeMenu}>Gallery</Link></li>
                        <li><Link className='linkbutton' to='/specials' onClick={this.closeMenu}>Specials</Link></li>
                        <li><Link className='linkbutton' to='/about' onClick={this.closeMenu}>About</Link></li>
                        <li><Link className='linkbutton' to='/contact' onClick={this.closeMenu}>Contact</Link></li>
                    </ul>
                    <div className='hamburger' onClick={this.popupmenu}>
                        {isOpen ? (<HamburgerOpen/>) : (<Hamburger />)}
                    </div>
                </div>
            </div>
            ) :(<div className="headerdiv">
            
                    <button type="button" className="thisbutton"><Link to='/gallery'>Gallery</Link></button>
                <div className="container" ref={this.container}>
                    <button type="button" className="thisbutton" onClick={this.handleButtonClick}>
                        Menus
                    </button>
                    {this.state.open && (
                        <div className="dropdown">
                        <ul>
                            <li><Link to='/foodcartmenu' onClick={this.handleButtonClick}>Food Cart Menu</Link></li>
                            <li><Link to='/cateringmenu' onClick={this.handleButtonClick}>Catering Menu</Link></li>
                        </ul>
                    </div>
                    )}
                </div>
                    <button type='button' className='thisbutton'><Link to='/'><img className='headerimage' src={headerimage}/></Link></button>
                <button type="button" className="thisbutton"><Link to='/contact'>Contact</Link></button>
                <button type="button" className="thisbutton"><Link to='/about'>About</Link></button>
            </div>)}
            </>
        );
    }
}
