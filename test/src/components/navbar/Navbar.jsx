import React from 'react';
import { RiMenu3Line, RiCloseLin } from 'react-icons/ri';
import logo from '../../assets/logo.gif';
import './navbar.css';

const Navbar = () => {
    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <p><a href="#home">Learn</a></p>
                    <p><a href="#Rarity">Rarity</a></p>
                    <p><a href="#Faq">Faq</a></p>
                    <p><a href="#Roadmap">Roadmap</a></p>
                    <p><a href="#home">Gallery</a></p>
                </div>
                <div className="gpt3__navbar-sign">
                    <p>Mint</p>
                    <button type="button">Stake</button>
                </div>
            </div>


        </div>
    )
}

export default Navbar
