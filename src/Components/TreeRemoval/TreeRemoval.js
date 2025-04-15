import React, { useState, useEffect } from 'react'
import './TreeRemoval.css'
import Navbar from '../Navbar/Navbar';
import removal from '../../Resources/Images/removal1.jpg'
import removal2 from '../../Resources/Images/removal2.jpg'
import FooterImg from '../Footer/FooterImg';
import { Helmet } from 'react-helmet-async';
import GoogleAnalytics from '../GoogleAnalytics/GoogleAnalytics';

const TreeRemoval = () => {
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
                <title>Tree Removal</title>
                <link rel='canonical' href='/Tree-Removal'></link>
                <meta name='description' content="Experience professional tree removal by Van Pelt's Tree & Lawn Care. Safely and efficiently remove unwanted trees from your property."></meta>
            </Helmet>
            <Navbar />
            <GoogleAnalytics/>
            <div className='service-layout'>
                <div className='service-layout-row'>
                    <div className='servicer-left first-wrapper
'>
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Expert Tree Removal Services</h1>
                        <p className='about-paragraph'>Our highly skilled team, led by the experienced Andrew, is dedicated to providing top-tier solutions for removing trees of all sizes and conditions. With a deep understanding of tree anatomy and safety protocols, we ensure that every tree removal is executed with precision and care.</p>
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
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Prompt Tree Removal</h1>
                        <p className='about-paragraph'>We recognize the urgency that often comes with tree removal, especially in emergency situations. Our commitment to rapid response times means that we'll be on-site quickly to assess the situation, devise a plan, and safely remove the tree, ensuring the safety of your property and the well-being of your outdoor space.</p>
                        </div> 
                    </div>
                </div>

                <div className='about-services'>
                    <div className='about-content-wrapper otherwrapper'><h1 className='about-header'>Trustworthy Tree Removal Experts

                    </h1>
                        <p className='about-paragraph'>We firmly believe in delivering on our promises. When you choose us, you're not just getting a tree removal service; you're getting a partner dedicated to upholding the highest standards of integrity and professionalism. Our mission is to exceed your expectations, ensuring your outdoor space remains safe and beautiful.</p>


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

export default TreeRemoval
