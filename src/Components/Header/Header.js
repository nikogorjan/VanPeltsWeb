import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import MyVideo from '../../Resources/Videos/animation.mp4';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import Axe from '../../Resources/Images/axe.png';
import { Link } from 'react-scroll';
 
function Header(props) {
  const videoRef = useRef(null);
  const [videoEnded, setVideoEnded] = useState(false);
  const [fadeState, setFadeState] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false); // Track video loaded state

  const getOffset = () => {
    return window.innerWidth < 1000 ? 0 : -150;
  };

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener('timeupdate', () => {
        if (videoRef.current.currentTime >= videoRef.current.duration - 0.5) {
          videoRef.current.pause();
          setVideoEnded(true);
        }
      });
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', () => {
          if (videoRef.current.currentTime >= videoRef.current.duration - 0.5) {
            videoRef.current.pause();
            setVideoEnded(true);
          }
        });
      }
    };
  }, []);

  const toggleFadeState = () => {
    setFadeState((prevFadeState) => !prevFadeState);
  };

  const goToContact = () => {
    document.querySelector('.the-slider').style.right = '0';
    console.log('working')
    setTimeout(() => {
        window.location.href = '/Contact';
    }, 1000); // 1000 milliseconds = 1 second


};

useEffect(()=>{
  var video = document.getElementById("video-id");

if ( video.readyState === 4 ) {
    console.log('video-loaded')
}
},[]);

{/*const handleVideoLoad = () => {
  // Video has loaded
  console.log('Video loaded');
  setVideoLoaded(true);
  
};*/}

useEffect(() => {
  if (videoRef.current) {
    videoRef.current.addEventListener('play', () => {
      // Video has started playing
      console.log('Video started playing');
      setVideoLoaded(true); // Set videoLoaded to true when the video starts playing

      // Forward the videoLoaded state to the parent component
    });
  }

  // Clean up the event listener
  return () => {
    if (videoRef.current) {
      videoRef.current.removeEventListener('play', () => {});
    }
  };
}, []);

useEffect(() => {
  console.log(videoLoaded); // This will log the updated value of videoLoaded
  props.onVideoLoadChange(videoLoaded);
}, [videoLoaded]);

{/*useEffect(() => {
  if (videoRef.current) {
    videoRef.current.addEventListener('loadeddata', () => {
      // Video has loaded
      console.log('Video loaded2');
      setVideoLoaded(true); // Set videoLoaded to true when the video is loaded

      // Forward the videoLoaded state to the parent component
      props.onVideoLoadChange(videoLoaded);
    });
  }

  // Clean up the event listener
  return () => {
    if (videoRef.current) {
      videoRef.current.removeEventListener('loadeddata', () => {});
    }
  };
}, [videoLoaded]);*/}

  return (
    <div className='header-main'>
      <div className='mobile-content'>
        <div className='header-hook-content'>
          <div className='hook-container'>
            <p className='location-hook'>Dayton, OH 45403</p>
            <h1 className='hook-header'>Ensuring Your Safety Through Expert Tree Removal Services</h1>
            <p className='hook-paragraph'>Where Green Dreams Come to Life: Crafting and Caring for Your Ideal Lawn.</p>
            <div className='hook-button-container'>
              <button className='hook-button' onClick={goToContact}>Contact</button>
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
          id='video-id'
          ref={videoRef}
          className="header-video"
          autoPlay
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
                <button className='hook-button' onClick={goToContact}>Contact</button>
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
            {/* Your existing code for blank content */}
          </div>
        </div>
      </div>
      <div className='pulse-layout'>
        <div className='pulse-position'>
          <Link
            to='bullets-main'
            spy={true}
            smooth={true}
            offset={getOffset()}
            duration={500}
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