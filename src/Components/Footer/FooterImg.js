import React from 'react';
import './FooterImg.css';
import FooterImage from '../../Resources/Images/before-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Resources/Images/logo.png'
import makerLogo from '../../Resources/Images/deminobg.png'
function FooterImg() {

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
        <div className='footer-img-main'>
            <div className='footer-margin-top'></div>
            <img src={FooterImage} alt='Footer' className='footer-image' />

            <div className='real-footer'>
                <div className='footer-info'>
                    <div className='services-fotter-info'>
                        <p className='services-footer-header'>Services</p>
                        <p className='services-footer-service' onClick={goToTreeRemoval}>Tree Removal</p>
                        <p className='services-footer-service' onClick={goToTreeTrimming}>Tree Trimming</p>
                        <p className='services-footer-service' onClick={goToLandscaping}>Landscaping</p>
                        <p className='services-footer-service' onClick={goToFence}>Privacy Fence Building</p>
                        <p className='services-footer-service' onClick={goToOther}>Other Removal Services</p>

                    </div>

                    <div className='contact-fotter-info'>
                        <p className='services-footer-header'>Contact</p>
                        <p className='services-footer-service' onClick={() => {
                            window.location.href = 'mailto:bigdrew_14@yahoo.com'; // Replace with the email address you want to use
                        }}>bigdrew_14@yahoo.com</p>
                        <p className='services-footer-service' onClick={() => {
                            window.location.href = 'tel:937-520-4551'; // Replace '1234567890' with the phone number you want to call
                        }}>937-520-4551</p>
                        <p className='services-footer-service' onClick={() => {
                            window.location.href = 'https://www.google.com/maps?q=Dayton,OH45403'; // Replace with the location you want to open
                        }}>Dayton, OH 45403</p>

                    </div>

                    <div className='contact-fotter-info'>
                        <p className='services-footer-header'>Socials</p>
                        <div className='socials-row'>
                            <a href='https://www.facebook.com/andrew.vanpelt.984' target='_blank'>
                                <FontAwesomeIcon className='facebook-icon' icon={faFacebook} style={{ color: 'rgb(235, 225, 196)' }} />
                            </a>
                            <a href='https://www.instagram.com/bigsecz2/' target='_blank'>
                                <FontAwesomeIcon className='linkedin-icon' icon={faInstagram} style={{ color: 'rgb(235, 225, 196)' }} />
                            </a>

                            <a href='https://www.tiktok.com/@bigsecz' target='_blank'>
                                <FontAwesomeIcon className='tiktok-icon' icon={faTiktok} style={{ color: 'rgb(235, 225, 196)' }} />
                            </a>
                        </div>

                    </div>
                </div>

                <div className='footer-logo'>
                    
                </div>
            </div>

            <div className='the-maker' onClick={() => window.location.href = 'https://nikogorjan.com/'}>
                <p className='copyrights'>Copyright © VanPelt's Tree & Lawn Care</p>
                <div className='pulsing-circle-portfolio'>
                <div className='pulsing-circle'>
                    <img src={makerLogo} alt="Climbing Vector" className='the-maker-logo' />
                    </div>
                </div>

                <p className='makers-web'> Made by Niko Gorjan &nbsp;</p>
                <p className='copyrights'> nikogorjan.com &nbsp;</p>

            </div>

        </div>
    );
}

export default FooterImg;