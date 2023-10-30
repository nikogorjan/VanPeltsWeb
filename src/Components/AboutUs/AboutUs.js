import React, { useState, useEffect } from 'react'
import './AboutUs.css'
import FooterImg from '../Footer/FooterImg';
import Navbar from '../Navbar/Navbar';
import andrew from '../../Resources/Images/andrew.jpg'
import landscape from '../../Resources/Images/aboutlandscape.jpg'
import lanscaping from '../../Resources/Images/landscape1.jpg'
import trimming from '../../Resources/Images/trimming1.jpg'
import removal from '../../Resources/Images/removal1.jpg'
import { gsap } from 'gsap'; // Import GSAP

const AboutUs = () => {
    const [sliderVisible, setSliderVisible] = useState(false);

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

    useEffect(() => {
        // Show the slider after a delay
        setTimeout(() => {
            setSliderVisible(true);
        }, 0); // 1000 milliseconds = 1 second
    }, []);

    const goToContact = () => {
        document.querySelector('.the-slider').style.right = '0';
        console.log('working')
        setTimeout(() => {
            window.location.href = '/Contact';
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
        <div className='aboutus-main'>
            <Navbar />

            <div className='about-content'>
                <div className='about-left-right'>
                    <div className='about-left'>
                        <div className='about-content-wrapper first-wrapper'>
                            <h1 className='about-header'>Meet Our Leader - Andrew</h1>
                            <p className='about-paragraph'>At Van Pelt's Tree & Lawn Care, our commitment to excellence is led by Andrew, a dedicated professional with a passion for trees and landscapes. Andrew's expertise and leadership drive our team's success in providing top-notch tree services.</p>
                            <button className='hook-button contact-page-button' onClick={goToContact}>Contact</button>
                        </div>
                    </div>
                    <div className='about-right img-wrapper'>
                        <img src={andrew} alt="Climbing Vector" className='andrew-img ' />

                    </div>

                </div>
                <div className='about-left-right2'>
                    <div className='about-left2'>
                        <img src={landscape} alt="Climbing Vector" className='andrew-img' />

                    </div>
                    <div className='about-right2'>
                        <div className='about-content-wrapper'>
                            <h1 className='about-header'>Our Promise - Fast and Reliable Service</h1>
                            <p className='about-paragraph'>We understand that when it comes to tree services, time matters. That's why we take pride in our rapid response times. When you choose Van Pelt's Tree & Lawn, you can count on us to arrive promptly and efficiently address your tree service needs.</p>
                        </div>
                    </div>
                </div>
                <div className='about-services'>
                    <div className='about-content-wrapper otherwrapper'><h1 className='about-header'>Delivering on Our Commitment

                    </h1>
                        <p className='about-paragraph'>Our reputation is built on trust and integrity. We believe in doing what we say we will. When you hire us, you can have confidence that we will meet and exceed your expectations, delivering high-quality results that enhance the beauty and safety of your outdoor spaces.</p>
                        <p className='about-paragraph'>Join our growing list of satisfied customers and experience the difference when you choose Van Pelt's Tree & Lawn for your tree service needs. We look forward to working with you.</p>


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



            <div className={`the-slider-out ${sliderVisible ? 'slider-visible' : ''}`}></div>
            <FooterImg />
        </div>
    )
}

export default AboutUs
