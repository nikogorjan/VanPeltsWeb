import React, { useRef, useState, useEffect } from 'react';
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Bullets from "./Components/Bullets/Bullets";
import ValueProp from './Components/ValueProp/ValueProp';
import Praise from './Components/Praise/Praise';
import FAQ from './Components/FAQ/FAQ';
import ContactLandingPage from './Components/ContactForm/ContactLandingPage';
import FooterImg from './Components/Footer/FooterImg';
import './Pages.css'
import lanscaping from './Resources/Images/landscape1.jpg'
import trimming from './Resources/Images/trimming1.jpg'
import removal from './Resources/Images/removal1.jpg'
import HookCall from './Components/HookCall/HookCall';
import nobglogo from './Resources/Images/nobglogo.png'
import { Helmet } from 'react-helmet-async';

const Pages = () => {
    const [sliderVisible, setSliderVisible] = useState(false);
    const [videoLoaded, setVideoLoaded] = useState(false); // Track video loaded state in the parent component
    const [videoVisible, setVideoVisible] = useState(false);
    const [pageLoaded, setPageLoaded] = useState(false);

    useEffect(() => {
        // Show the slider after a delay
        setTimeout(() => {
            
                {/*setSliderVisible(true);*/}

            
        }, 0); // 1000 milliseconds = 1 second
    }, []);
    const bulletsRef = useRef(null);

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

    const handleVideoLoadChange = (isLoaded) => {
        // Handle the video loaded change
        setVideoLoaded(isLoaded);
      };

     

      useEffect(() => {
        // callback function to call when event triggers
        const onPageLoad = () => {
          console.log('page loaded');
          
            
          //////////////////////////////////////////////////// 
        setVideoVisible(true);
        setSliderVisible(true);

    
          // do something else
        };
    
        // Check if the page has already loaded
        if (document.readyState === 'complete') {
          onPageLoad();
        } else {
          window.addEventListener('load', onPageLoad, false);
          // Remove the event listener when component unmounts
          return () => window.removeEventListener('load', onPageLoad);
        }
      }, []);

    return (
        <div>
            <Helmet>
                <title>Van Pelt's Tree & Lawn Care</title>
                <link rel='canonical' href='/'></link>
                <meta name='description' content="Van Pelt's Tree & Lawn Care: Your Trusted Partner for Expert Tree and Lawn Services in Dayton Ohio. Bringing Beauty and Health to Your Outdoors."></meta>
            </Helmet>
            <Navbar />
            <Header bulletsRef={bulletsRef} onVideoLoadChange={handleVideoLoadChange} />
            <Bullets bulletsRef={bulletsRef} />
            <ValueProp />
            <Praise />
            <FAQ />
            <HookCall />
            {/*<ContactLandingPage />*/}
            <div className='color-services'>
                <div className='contact-services'>
                    <div className='contact-work landscaping-work' onClick={goToLandscaping}>
                        <div className='works-overflow'>
                            <div className='works-overflow-wrapper'>
                                <h1 className='works-overflow-header'>Landscaping</h1>
                                <p className='works-overflow-paragraph'>Experience landscaping excellence with our professional team. We offer a wide range of services to design, build, and maintain your dream landscape, adding value and curb appeal to your property.</p>
                                <div className='arrowright'>

                                    <span className="right"></span>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact-work removal-work' onClick={goToTreeRemoval}>
                        <div className='works-overflow'>
                            <div className='works-overflow-wrapper'>
                                <h1 className='works-overflow-header'>Tree Removal</h1>
                                <p className='works-overflow-paragraph'>When it comes to tree removal, safety and reliability are our top priorities. Our expert team is dedicated to removing trees of all sizes efficiently and securely.</p>
                                <div className='arrowright'>
                                    <span className="right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact-work trimming-work' onClick={goToTreeTrimming}>
                        <div className='works-overflow'>
                            <div className='works-overflow-wrapper'>
                                <h1 className='works-overflow-header'>Tree Trimming</h1>
                                <p className='works-overflow-paragraph'>Experience the art of precision tree trimming with our expert team. We enhance the beauty and health of your trees through careful, skilled pruning.</p>
                                <div className='arrowright'>
                                    <span className="right"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className='contact-work fence-work' onClick={goToFence}>
                        <div className='works-overflow'>
                            <div className='works-overflow-wrapper'>
                                <h1 className='works-overflow-header'>Privacy Fence Building</h1>
                                <p className='works-overflow-paragraph'>When it comes to privacy fences, quality is paramount. Our construction experts use the finest materials and craftsmanship to ensure the longevity and durability of your new fence.</p>
                                <div className='arrowright'>
                                    <span className="right"></span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='contact-work removal-work2' onClick={goToOther}>

                        <div className='works-overflow'>
                            <div className='works-overflow-wrapper'>
                                <h1 className='works-overflow-header'>Other Removal Services</h1>
                                <p className='works-overflow-paragraph'>Our all-in-one service combines ivy removal, honeysuckle removal, leaf cleaning, and power washing to transform your outdoor space.</p>
                                <div className='arrowright'>
                                    <span className="right"></span>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            

            <FooterImg />
            <div className={`the-slider-out ${sliderVisible ? 'slider-visible' : ''}`}>

            </div>

            <div className={`loading-screen ${videoVisible ? 'close-loading' : ''}`}>
                {/*<div className="loading-circle"></div>
                <p className='loading-paragraph'>Loading</p>*/}
                <div className='pulsing-logo'>
                <img src={nobglogo} alt="No background logo" className='nobglogoclass pulse3'/>
                <p className='loading-paragraph'>Loading<span className='dot1'>.</span ><span className='dot1'>.</span><span className='dot1'>.</span></p>
                </div>
            </div>
        </div>
    );
};

export default Pages;