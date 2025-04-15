import React, { useState, useEffect } from 'react'
import Navbar from '../Navbar/Navbar';
import removal from '../../Resources/Images/ivy1.png'
import removal2 from '../../Resources/Images/leaf1.png'
import removal3 from '../../Resources/Images/suckle1.png'
import removal4 from '../../Resources/Images/washing1.png'

import FooterImg from '../Footer/FooterImg';
import { Helmet } from 'react-helmet-async';
import GoogleAnalytics from '../GoogleAnalytics/GoogleAnalytics';

const OtherService = () => {
    const [sliderVisible, setSliderVisible] = useState(false);

    useEffect(() => {
        // Show the slider after a delay
        setTimeout(() => {
            setSliderVisible(true);
        }, 0); // 1000 milliseconds = 1 second
    }, []);

    const goToTreeRemoval = () => {
        document.querySelector('.the-slider').style.right = '0';
        setTimeout(() => {
            window.location.href = '/Tree-Removal';
        }, 1000); // 1000 milliseconds = 1 second


    };
    const goToContact = () => {
        document.querySelector('.the-slider').style.right = '0';
        console.log('working')
        setTimeout(() => {
            window.location.href = '/Contact';
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

    useEffect(() => {
        // Show the slider after a delay
        setTimeout(() => {
            document.querySelector('.first-wrapper').classList.add('wrapper-slide');
        }, 300); // 1000 milliseconds = 1 second

        setTimeout(() => {
            document.querySelector('.img-wrapper').classList.add('img-slide');
        }, 600); // 1000 milliseconds = 1 second

        // Animate the about-left and about-right elements
        
    }, []);
    
  return (
    <div className='tree-removal-main'>
        <Helmet>
                <title>Other Removal Services</title>
                <link rel='canonical' href='/Other-Services'></link>
                <meta name='description' content="Beyond trees, we offer a range of specialized removal services. Trust Van Pelt's Tree & Lawn Care for all your removal needs."></meta>
            </Helmet>
            <Navbar />
            <GoogleAnalytics/>
            <div className='service-layout'>
                <div className='service-layout-row'>
                    <div className='servicer-left first-wrapper'>
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Reclaim Your Space with Ivy Removal</h1>
                        <p className='about-paragraph'>When invasive ivy threatens to overtake your property, turn to Van Pelt's Tree & Lawn for professional ivy removal services. Our team of experts is equipped to free your outdoor space from the relentless grasp of ivy, restoring it to its natural beauty and vitality.</p>
                        <button className='hook-button contact-page-button' onClick={goToContact}>Contact</button>

                        </div> 
                    </div>
                    <div className='servicer-right img-wrapper'>
                        <img src={removal} alt="Climbing Vector" className='andrew-img' />

                    </div>
                </div>
                <div className='service-layout-row'>
                    <div className='servicer-left'>
                        <img src={removal2} alt="Climbing Vector" className='andrew-img' />

                    </div>
                    <div className='servicer-right'>
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Pristine Outdoor Spaces with Leaf Cleaning</h1>
                        <p className='about-paragraph'>Fall leaves piling up? Let Van Pelt's Tree & Lawn take care of it with our meticulous leaf cleaning services. We'll clear away fallen leaves and debris, leaving your outdoor spaces looking immaculate and ready for you to enjoy.</p>
                        </div> 
                    </div>
                </div>
                <div className='service-layout-row'>
                    <div className='servicer-left'>
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Tangle-Free with Honeysuckle Removal</h1>
                        <p className='about-paragraph'>Unwanted honeysuckle taking over your landscape? Say goodbye to the tangles with Van Pelt's Tree & Lawn's honeysuckle removal services. Our skilled team will clear your outdoor area of this invasive vine, restoring the beauty and health of your plants.</p>

                        </div> 
                    </div>
                    <div className='servicer-right'>
                        <img src={removal3} alt="Climbing Vector" className='andrew-img' />

                    </div>
                </div>
                <div className='service-layout-row'>
                    <div className='servicer-left'>
                        <img src={removal4} alt="Climbing Vector" className='andrew-img' />

                    </div>
                    <div className='servicer-right'>
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Revive with Power Washing</h1>
                        <p className='about-paragraph'> Is dirt and grime dulling the appearance of your outdoor surfaces? Our power washing services are the solution. Van Pelt's Tree & Lawn will clean your deck, patio, siding, and more, making them look brand new and ready to shine.</p>
                        </div> 
                    </div>
                </div>

                <div className='about-services'>
                    <div className='about-content-wrapper otherwrapper'><h1 className='about-header'>Complete Outdoor Renewal

                    </h1>
                        <p className='about-paragraph'>Our combined services include ivy removal, leaf cleaning, honeysuckle removal, and power washing. Experience the full transformation of your outdoor space with our efficient and reliable solutions. We're here to restore your property's beauty and make it a clean, inviting, and vibrant environment for you to enjoy.</p>


                    </div>
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
            </div>

            <div
                className={`the-slider-out ${sliderVisible ? 'slider-visible' : ''}`}
            ></div>

            <FooterImg />
        </div>
  )
}

export default OtherService
