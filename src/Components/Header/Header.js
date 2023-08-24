import React, { useRef, useEffect } from 'react';
import './Header.css';
import MyVideo from '../../Resources/Videos/animation.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Axe from '../../Resources/Images/axe.png'
import { Link } from 'react-scroll';

function Header() {
  const videoRef = useRef(null);

  const getOffset = () => {
    return window.innerWidth < 1000 ? 0 : -150;
  };

  useEffect(() => {
    if (videoRef.current) {
      const timeout = setTimeout(() => {
        if (videoRef.current.paused) {
          videoRef.current.play();
        } else {
          videoRef.current.pause();
        }
      }, 12960); // 12.9 seconds in milliseconds

      return () => clearTimeout(timeout);
    }
  }, []);

  return (
    <div className='header-main'>
      <div className='mobile-content'>
        <div className='header-hook-content'>
          <div className='hook-container'>
            <p className='location-hook'>Dayton, OH 45403</p>
            <h1 className='hook-header'>Ensuring Your Safety Through Expert Tree Removal Services</h1>
            <p className='hook-paragraph'>Where Green Dreams Come to Life: Crafting and Caring for Your Ideal Lawn.</p>
            <div className='hook-button-container'>
              <button className='hook-button'>Contact</button>
              <div className='stars-hook-container'>
                <p className='stars-paragraph'>+465 finished projects</p>
                <div className='stars-container'>
                  <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                  <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                  <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                  <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                  <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div className="header-container">
        <video
          ref={videoRef}
          className="header-video"
          autoPlay
          loop
          muted
        >
          <source src={MyVideo} type="video/mp4" />
        </video>
        <div className="content-container">
          <div className='header-hook-content'>
            <div className='hook-container'>
              <p className='location-hook'>Dayton, OH 45403</p>
              <h1 className='hook-header'>Ensuring Your Safety Through Expert Tree Removal Services</h1>
              <p className='hook-paragraph'>Where Green Dreams Come to Life: Crafting and Caring for Your Ideal Lawn.</p>
              <div className='hook-button-container'>
                <button className='hook-button'>Contact</button>
                <div className='stars-hook-container'>
                  <p className='stars-paragraph'>+465 finished projects</p>
                  <div className='stars-container'>
                    <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                    <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                    <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                    <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                    <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='header-blank-content'>
          </div>
        </div>

      </div>
      <div className='pulse-layout'>
        <div className='pulse-position'>
        <Link
          to='bullets-main'
          spy={true}
          smooth={true}
          offset={getOffset()} // Adjust this offset as needed
          duration={500} // Adjust the duration as needed
          className="circle-pulse"
        >

          <div className="axe-container">
            <img src={Axe} alt="Axe" className="axe-image" />
          </div>

        </Link>
        </div>
      </div>
    </div>

  );
}

export default Header;