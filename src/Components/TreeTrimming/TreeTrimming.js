import React, { useState, useEffect } from 'react'
import './TreeTrimming.css'
import Navbar from '../Navbar/Navbar';
import removal from '../../Resources/Images/trimming1.jpg'
import removal2 from '../../Resources/Images/trimming2.jpg'
import FooterImg from '../Footer/FooterImg';
import { Helmet } from 'react-helmet-async';
import GoogleAnalytics from '../GoogleAnalytics/GoogleAnalytics';

const TreeTrimming = () => {
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
                <title>Tree Trimming</title>
                <link rel='canonical' href='/Tree-Trimming'></link>
                <meta name='description' content="Elevate your landscape with precision tree trimming services from Van Pelt's Tree & Lawn Care. Enhance tree health and aesthetic appeal today."></meta>
            </Helmet>
            <Navbar />
            <GoogleAnalytics/>
            <div className='service-layout'>
                <div className='service-layout-row'>
                    <div className='servicer-left first-wrapper
'>
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Precision Tree Trimming Services</h1>
                        <p className='about-paragraph'>Andrew and our team of skilled arborists bring their expertise to every project. We understand that tree trimming is an art that requires a delicate touch, and our commitment to excellence ensures that your trees are pruned with care and precision to enhance their health and appearance.</p>
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
                    <div className='about-content-wrapper'>   <h1 className='about-header'>Timely Tree Trimming</h1>
                        <p className='about-paragraph'>When your trees need a trim, you need it done promptly. Van Pelt's Tree & Lawn is your trusted partner for swift tree trimming services. Our rapid response times mean your trees receive the attention they need right when it matters. We'll maintain the health and vitality of your trees while enhancing the beauty of your outdoor space.</p>
                        </div> 
                    </div>
                </div>

                <div className='about-services'>
                    <div className='about-content-wrapper otherwrapper'><h1 className='about-header'>Reliable Tree Trimming Experts

                    </h1>
                        <p className='about-paragraph'>We've built our reputation on trust and integrity. When you choose us, you're choosing a team committed to delivering on our promises. Our mission is to exceed your expectations, ensuring your trees remain healthy and your outdoor space flourishes under the care of seasoned professionals.</p>


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

export default TreeTrimming
