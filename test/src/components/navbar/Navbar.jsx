import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.gif';
import './navbar.css';

const Menu = () => (
    <>
    <p><a href="#home">Learn</a></p>
    <p><a href="#Rarity">Rarity</a></p>
    <p><a href="#Faq">Faq</a></p>
    <p><a href="#Roadmap">Roadmap</a></p>
    <p><a href="#home">Gallery</a></p>
    </>
)

const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (
        <div className="gpt3__navbar">
            <div className="gpt3__navbar-links">
                <div className="gpt3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div>
                <div className="gpt3__navbar-links_container">
                    <Menu />
                </div>
                <div className="gpt3__navbar-sign">
                    <p>Mint</p>
                    <button type="button">Stake</button>
                </div>
                <div className="gpt3__navbar-menu">
                    {toggleMenu
                      ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
                      : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />
                    }
                    {toggleMenu && (
                        <div className="gpt3__navbar-menu_container scale-up-center">
                            <div className="gpt3__navbar-menu_container-links"></div>
                            <Menu />
                        </div>
                    )}
                </div>
            </div>


        </div>
    )
}

export default Navbar
