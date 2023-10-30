import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Logo from '../../Resources/Images/logo.png'
import { useNavigate, useLocation } from 'react-router-dom'; // Import useNavigate

function Navbar() {
    const [scrolling, setScrolling] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [subMenuOpen, setSubMenuOpen] = useState(false);
    const navigate = useNavigate(); // Initialize useNavigate
    const location = useLocation(); // Get the current location


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
        

        if (location.pathname !== '/') {
            document.querySelector('.the-slider').style.right = '0';

          }
          

          setTimeout(() => {
            window.scrollTo(0, 0);
            navigate('/');
          }, 1000); // 1000 milliseconds = 1 second
        
    };

    // Function to navigate to the contact page
    const goToContact = () => {
        document.querySelector('.the-slider').style.right = '0';

        setTimeout(() => {
            window.location.href = '/Contact';
        }, 1000); // 1000 milliseconds = 1 second


    };

    const goToAbout = () => {
        document.querySelector('.the-slider').style.right = '0';
        setTimeout(() => {
            window.location.href = '/About';
        }, 1000); // 1000 milliseconds = 1 second


    };

    const goToTreeRemoval = () => {
        document.querySelector('.the-slider').style.right = '0';
        setTimeout(() => {
            window.location.href = '/Tree-Removal';
        }, 1000); // 1000 milliseconds = 1 second


    };

    const goToTreeTrimming = () => {
        document.querySelector('.the-slider').style.right = '0';
        setTimeout(() => {
            window.location.href = '/Tree-Trimming';
        }, 1000); // 1000 milliseconds = 1 second


    };

    const goToLandscaping = () => {
        document.querySelector('.the-slider').style.right = '0';
        setTimeout(() => {
            window.location.href = '/Landscaping';
        }, 1000); // 1000 milliseconds = 1 second


    };

    const goToFence = () => {
        document.querySelector('.the-slider').style.right = '0';
        setTimeout(() => {
            window.location.href = '/Privacy-Fence-Building';
        }, 1000); // 1000 milliseconds = 1 second


    };

    const goToOther = () => {
        document.querySelector('.the-slider').style.right = '0';
        setTimeout(() => {
            window.location.href = '/Other-Services';
        }, 1000); // 1000 milliseconds = 1 second


    };

    return (
        <div>
            <div className={`navbar-main ${scrolling ? 'scrolled' : ''}`}>
                <div className='locationflex'><div className='navbar-logo' onClick={goToHome}>
                    <img src={Logo} alt="Logo" />
                </div>
                    <p className='locationnav'>Dayton, OH 45403</p>
                </div>
                <div className='navbar-links'>
                    <p onClick={goToHome}>Home</p> 
                    <div className='services-menu'>
                        <p>Services</p>
                        <div className='sub-menu'>
                            <div className='sub-menu-item' onClick={goToTreeRemoval}><p>Tree Removal</p></div>
                            <div className='sub-menu-item' onClick={goToTreeTrimming}><p>Tree Trimming</p></div>
                            <div className='sub-menu-item' onClick={goToLandscaping}><p>Landscaping</p></div>
                            <div className='sub-menu-item' onClick={goToFence}><p>Privacy Fence Building</p></div>
                            <div className='sub-menu-item' onClick={goToOther}><p>Other Removal Services</p></div>

                        </div>
                    </div>
                    <p onClick={goToAbout}>About Us</p>
                    <button className='navbar-button' onClick={goToContact}>Contact</button>

                </div>
                <div className='navbar-menu' onClick={toggleMenu}>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                    <div className='menu-line'></div>
                </div>

                <div className={`open-menu ${menuOpen ? "openmenu" : ""}`} style={{ height: subMenuOpen ? '365px' : '' }}>
                    <p onClick={goToHome} className='mainmenu2'>Home</p>
                    <div className='openmenu-services'>
                        <p onClick={toggleSubMenu} className='mainmenu2'>Services</p>
                        <div className={`openmenu-sub ${subMenuOpen ? "openmenu2" : ""}`} >
                            <div className='sub-menu-item2' onClick={goToTreeRemoval}><p>Tree Removal</p></div>
                            <div className='sub-menu-item2' onClick={goToTreeTrimming}><p>Tree Trimming</p></div>
                            <div className='sub-menu-item2' onClick={goToLandscaping}><p>Landscaping</p></div>
                            <div className='sub-menu-item2' onClick={goToFence}><p>Privacy Fence Building</p></div>
                            <div className='sub-menu-item2' onClick={goToOther}><p>Other Removal Services</p></div>
                        </div>
                    </div>
                    <p onClick={goToAbout} className='mainmenu2'>About Us</p>
                    <button onClick={goToContact} className='mainmenu2 mainmenubutton'>Contact</button>
                </div>



            </div>

            <div className='the-slider'></div>

        </div>
    );
}

export default Navbar;