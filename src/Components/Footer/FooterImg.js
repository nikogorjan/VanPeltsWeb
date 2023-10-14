import React from 'react';
import './FooterImg.css';
import FooterImage from '../../Resources/Images/before-footer.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faLinkedin, faTwitter, faTiktok } from '@fortawesome/free-brands-svg-icons';
import Logo from '../../Resources/Images/logo.png'

function FooterImg() {


    return (
        <div className='footer-img-main'>
            <div className='footer-margin-top'></div>
            <img src={FooterImage} alt='Footer' className='footer-image' />
            
            <div className='real-footer'>
                <div className='footer-info'>
                    <div className='services-fotter-info'>
                        <p className='services-footer-header'>Services</p>
                        <p className='services-footer-service'>Tree Removal</p>
                        <p className='services-footer-service'>Tree Trimming</p>
                        <p className='services-footer-service'>Landscaping</p>

                    </div>

                    <div className='contact-fotter-info'>
                        <p className='services-footer-header'>Contact</p>
                        <p className='services-footer-service'>something@gmail.com</p>
                        <p className='services-footer-service'>323771XXXX</p>
                        <p className='services-footer-service'>Beverly Hills, California,</p>

                    </div>

                    <div className='contact-fotter-info'>
                        <p className='services-footer-header'>Socials</p>
                        <div className='socials-row'>
                        <a href='https://www.facebook.com'>
                                <FontAwesomeIcon className='facebook-icon' icon={faFacebook} style={{ color: 'rgb(235, 225, 196)' }} />
                            </a>
                            <a href='https://www.linkedin.com'>
                                <FontAwesomeIcon className='linkedin-icon' icon={faLinkedin} style={{ color: 'rgb(235, 225, 196)' }} />
                            </a>
                            <a href='https://www.twitter.com'>
                                <FontAwesomeIcon className='twitter-icon' icon={faTwitter} style={{ color: 'rgb(235, 225, 196)' }} />
                            </a>
                            <a href='https://www.tiktok.com'>
                                <FontAwesomeIcon className='tiktok-icon' icon={faTiktok} style={{ color: 'rgb(235, 225, 196)' }} />
                            </a>
                        </div>

                    </div>
                </div>

                <div className='footer-logo'>
                <img src={Logo} alt='Footer-logo' className='footer-logo-image' />
                </div>
            </div>

        </div>
    );
}

export default FooterImg;