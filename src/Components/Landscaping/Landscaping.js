import React, { useState, useEffect } from 'react'
import './Landscaping.css'
import Navbar from '../Navbar/Navbar';
import removal from '../../Resources/Images/landscape1.jpg'
import removal2 from '../../Resources/Images/landscape5.jpg'
import FooterImg from '../Footer/FooterImg';
import { Helmet } from 'react-helmet-async';

const Landscaping = () => {
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
                <title>Landscaping</title>
                <link rel='canonical' href='/Landscaping'></link>
                <meta name='description' content="Transform your outdoor space into a picturesque paradise with Van Pelt's Tree & Lawn Care. Our landscaping services breathe life into your dreams."></meta>
            </Helmet>
            <Navbar />

            <div className='service-layout'>
                <div className='service-layout-row'>
                    <div className='servicer-left first-wrapper
'>
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Creative Landscaping Solutions</h1>
                        <p className='about-paragraph'>Our dedicated team, led by Andrew, is passionate about transforming outdoor spaces into beautiful, functional landscapes. We bring a wealth of innovative ideas to every project, ensuring that your vision is brought to life in a way that's both aesthetically pleasing and practical.</p>
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
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Timely Landscaping Design</h1>
                        <p className='about-paragraph'>When it comes to landscaping design, timing is crucial. Van Pelt's Tree & Lawn is your partner for timely landscaping services. We understand that you want to enjoy your outdoor space to the fullest, and our rapid response ensures that your landscaping project is completed efficiently, so you can relish the beauty and functionality of your revamped landscape.</p>
                        </div> 
                    </div>
                </div>

                <div className='about-services'>
                    <div className='about-content-wrapper otherwrapper'><h1 className='about-header'>Trustworthy Landscaping Professionals

                    </h1>
                        <p className='about-paragraph'>We're founded on the principles of integrity and reliability. Our commitment is to deliver on our promises, providing high-quality landscaping services that enhance your property's curb appeal and value. With our team, you're not just getting a landscaper; you're getting a dependable partner in crafting your dream outdoor environment.</p>


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

export default Landscaping
