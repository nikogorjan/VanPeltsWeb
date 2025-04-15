import React, { useState, useEffect } from 'react';
import './ContactPage.css'
import Navbar from '../Navbar/Navbar';
import FooterImg from '../Footer/FooterImg';
import VectorClimber from '../../Resources/Images/climber_flat5.png';
import ContactForm from '../ContactForm/ContactForm';


import LeafAnimation from './Components/LeafAnimation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { Helmet } from 'react-helmet-async';
import GoogleAnalytics from '../GoogleAnalytics/GoogleAnalytics';

function Contact() {
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
      document.querySelector('.first-wrapper2').classList.add('wrapper-slide');

    }, 300); // 1000 milliseconds = 1 second

    setTimeout(() => {
      document.querySelector('.img-wrapper').classList.add('img-slide');
    }, 600); // 1000 milliseconds = 1 second

    // Animate the about-left and about-right elements

  }, []);

  return (
    <div>
      <Helmet>
                <title>Contact</title>
                <link rel='canonical' href='/Contact'></link>
                <meta name='description' content="Get in touch with Van Pelt's Tree & Lawn Care for top-notch tree and lawn services in Dayton, Ohio. We're here to transform your outdoor space!"></meta>
            </Helmet>
      <Navbar />
      <GoogleAnalytics/>

      <div className='contact-page-main'>
        <LeafAnimation className='zindex'/>
        <div className='contact-hero-layout'>
          <div className='contact-hero-right mobileno'>
            <div className='Contact-headers-container first-wrapper
'>
              <h1 className='Contact-main-header'>Your Trusted Source for Tree Care in Dayton Ohio</h1>
              <p className='contact-main-paragraph'>Call for a free estimate</p>
              <button className='hook-button contact-page-button' onClick={() => {
                window.location.href = 'tel:937-520-4551'; // Replace '1234567890' with the phone number you want to call
              }}>Call</button>
            </div>
          </div>
          <div className='contact-hero-left img-wrapper'>
            <img src={VectorClimber} alt="Climbing Vector" className='vector-img' />
          </div>
          <div className='contact-hero-right mobileyes '>
            <div className='Contact-headers-container first-wrapper2
'>
              <h1 className='Contact-main-header'>Your Trusted Source for Tree Care in Dayton Ohio</h1>
              <p className='contact-main-paragraph'>Call for a free estimate</p>
              <button className='hook-button contact-page-button' onClick={() => {
                window.location.href = 'tel:937-520-4551'; // Replace '1234567890' with the phone number you want to call
              }}>Call</button>
            </div>
          </div>

        </div>

        <div className='contact-information'>
          <div className='the-information'>
            <div className='fa-icon-wrapper'><FontAwesomeIcon icon={faPhone} style={{ color: '#384b44' }} className='fa-icon' /></div>
            <div className='info-div'>
              <p className='info-type'>PHONE</p>
              <p className='info-information' onClick={() => {
                window.location.href = 'tel:937-520-4551'; // Replace '1234567890' with the phone number you want to call
              }}>937-520-4551 </p>
            </div>
          </div>

          <div className='the-information'>
            <div className='fa-icon-wrapper'><FontAwesomeIcon icon={faEnvelope} style={{ color: '#384b44' }} className='fa-icon' /></div>
            <div className='info-div'>
              <p className='info-type'>E-MAIL</p>
              <p className='info-information' onClick={() => {
                window.location.href = 'mailto:bigdrew_14@yahoo.com'; // Replace with the email address you want to use
              }}>bigdrew_14@yahoo.com </p>
            </div>
          </div>

          <div className='the-information'>
            <div className='fa-icon-wrapper'><FontAwesomeIcon icon={faLocationDot} style={{ color: '#384b44' }} className='fa-icon' /></div>
            <div className='info-div'>
              <p className='info-type'>LOCATION</p>
              <p className='info-information' onClick={() => {
                window.location.href = 'https://www.google.com/maps?q=Dayton,OH45403'; // Replace with the location you want to open
              }}>Dayton, OH 45403</p>
            </div>
          </div>
        </div>

        <div className='contact-contact-form'>
          <h1 className='Contact-main-header2'>Let's get in touch</h1>
          <ContactForm />
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

        <div className='contact-map-location'>
          <iframe
            title="Google Map"
            width="100%"
            height="640"
            frameBorder="0"
            style={{ border: 0 }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12876.100282764922!2d-84.17908041825458!3d39.7526805925275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8840833a8e917269%3A0x9b59d647f54ee7f5!2sDayton%2C%20OH%2045403!5e0!3m2!1sen!2sus!4v1587584135591!5m2!1sen!2sus"
            allowFullScreen
          ></iframe>
        </div>

      </div>

      <div
        className={`the-slider-out ${sliderVisible ? 'slider-visible' : ''}`}
      ></div>
      <FooterImg className='contact-footer-margin' />
    </div>
  );
}

export default Contact;