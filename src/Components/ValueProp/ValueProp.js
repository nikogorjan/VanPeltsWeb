import React, { useState, useEffect } from 'react';
import './ValueProp.css';
import Landscape from '../../Resources/Images/landscape2.png';

function ValueProp() {
    const [showSlidingDiv, setShowSlidingDiv] = useState(false);
    const [fadeOut, setFadeOut] = useState(false);
    const [fadeState, setFadeState] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = document.querySelector('.value-prop-main').getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;

            if (sectionTop <= viewportHeight * 0.9) {
                setShowSlidingDiv(true);
                setFadeOut(false);
            } else if (sectionTop > viewportHeight * 0.9 && showSlidingDiv) {
                setFadeOut(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [showSlidingDiv]);

    const toggleFadeState = () => {
        setFadeState((prevFadeState) => !prevFadeState);
    };

    return (
        <div className='value-prop-main'>
            <div className='value-prop-main-layout'>
                <div className='landscape-container'>
                    <div className={`image-resizer ${fadeState ? 'scale-in' : 'scale-out '}`}>
                        <img className='landscape-layout' src={Landscape} alt='Landscape' />
                    </div>
                    {showSlidingDiv && (
                        <div className={`sliding-div ${fadeState ? 'fade-out' : 'fade-in'}`}>
                            <p className='message'>
                                Embrace the beauty of nature. Your dream outdoor space awaits!
                            </p>
                        </div>
                    )}
                </div>
                <div className='pulse-circle' onClick={toggleFadeState}>
                    {fadeState ? 'Show Message' : 'Hide Message'}
                </div>
            </div>
            <div className='value-prop2'>Preserving Aesthetic Harmony: Nurturing Your Outdoor Sanctuary</div>
            <div className='value-prop2-paragraph'>
                Through thoughtful design, sustainable practices, and expert care, we transform your outdoor space into a living masterpiece that captures the beauty of nature while harmonizing with your vision.
                <div className='value-prop2-button'>Get a Free Estimate</div>
            </div>
        </div>
    );
}

export default ValueProp;