import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../Resources/Images/logo.png'
import { useNavigate } from 'react-router-dom'; // Import useNavigate

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate


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

    const goToHome = () => {
        navigate('/');
    };

    // Function to navigate to the contact page
    const goToContact = () => {
        window.location.href = '/Contact';

    };

    return (
        <div className={`navbar-main ${scrolling ? 'scrolled' : ''}`}>
            <div className='navbar-logo' onClick={goToHome}>
                <img src={Logo} alt="Logo" />
            </div>
            <div className='navbar-links'>
                <p onClick={goToHome}>Home</p>
                <div className='services-menu'>
                    <p>Services</p>
                    <div className='sub-menu'>
                        <div className='sub-menu-item'><p>Tree Removal</p></div>
                        <div className='sub-menu-item'><p>Tree Trimming</p></div>
                        <div className='sub-menu-item'><p>Landscaping</p></div>
                    </div>
                </div>
                <p>About Us</p>
                <button className='navbar-button' onClick={goToContact}>Contact</button>

            </div>
            <div className='navbar-menu' onClick={toggleMenu}>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
                <div className='menu-line'></div>
            </div>

            <div className={`open-menu ${menuOpen ? "openmenu" : ""}`} style={{ height: subMenuOpen ? '300px' : '' }}>
                <p onClick={goToHome}>Home</p>
                <div className='openmenu-services'>
                    <p  onClick={toggleSubMenu}>Services</p>
                    <div className={`openmenu-sub ${subMenuOpen ? "openmenu2" : ""}`} >
                        <div className='sub-menu-item'><p>Tree Removal</p></div>
                        <div className='sub-menu-item'><p>Tree Trimming</p></div>
                        <div className='sub-menu-item'><p>Landscaping</p></div>
                    </div>
                </div>
                <p>About Us</p>
                <button onClick={goToContact}>Contact</button>
            </div>

        </div>
    );
}

export default Navbar;