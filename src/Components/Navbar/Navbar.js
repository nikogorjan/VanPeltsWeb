import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../Resources/Images/logo.png'

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);


    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrolling(true);
            } else {
                setScrolling(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const toggleSubMenu = () => {
        setSubMenuOpen(!subMenuOpen);
    };

    return (
        <div className={`navbar-main ${scrolling ? 'scrolled' : ''}`}>
            <div className='navbar-logo'>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='navbar-links'>
                <p>Home</p>
                <div className='services-menu'>
                    <p>Services</p>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'><p>Tree Removal</p></div>
                        <div className='sub-menu-item'><p>Tree Trimming</p></div>
                        <div className='sub-menu-item'><p>Landscaping</p></div>
                    </div>
                </div>
                <p>About Us</p>
                <button className='navbar-button'>Contact</button>

            </div>
            <div className='navbar-menu' onClick={toggleMenu}>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
            </div>

            <div className={`open-menu ${menuOpen ? "openmenu" : ""}`} style={{ height: subMenuOpen ? '300px' : '' }}>
                <p>Home</p>
                <div className='openmenu-services'>
                    <p  onClick={toggleSubMenu}>Services</p>
                    <div className={`openmenu-sub ${subMenuOpen ? "openmenu2" : ""}`} >
                        <div className='sub-menu-item'><p>Tree Removal</p></div>
                        <div className='sub-menu-item'><p>Tree Trimming</p></div>
                        <div className='sub-menu-item'><p>Landscaping</p></div>
                    </div>
                </div>
                <p>About Us</p>
                <button>Contact</button>
            </div>

        </div>
    );
}

export default Navbar;