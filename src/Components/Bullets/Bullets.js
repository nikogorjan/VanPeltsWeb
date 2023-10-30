import React, { useState, useEffect, useRef } from 'react';
import './Bullets.css';
import TreeIcon from '../../Resources/Images/tree-icon.png';
import GrassIcon from '../../Resources/Images/grass.png';
import ScheduleIcon from '../../Resources/Images/schedule.png';
import TreeClimber from '../../Resources/Images/climber4.jpg';

function Bullets({ bulletsRef }) {
    const [scrolled, setScrolled] = useState(false);
    const circleRef = useRef(null);
    const circleRef2 = useRef(null);
    const circleRef3 = useRef(null);
     
    const [isAnimationTriggered, setAnimationTriggered] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const sectionTop = document.querySelector('.climber-bullet').getBoundingClientRect().top;
            const viewportHeight = window.innerHeight;
            if (sectionTop <= viewportHeight * 0.8) {
                setAnimationTriggered(true);
                setScrolled(true);
            } else {
                setAnimationTriggered(false);
                setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        if (isAnimationTriggered) {
            let start = 0;
            const end = 465;
            const duration = 160; // 5 seconds
            const increment = (end - start) / duration;
            let current = start;

            const updateNumber = () => {
                if (current <= end) {
                    circleRef.current.textContent = Math.round(current);
                    current += increment;
                    requestAnimationFrame(updateNumber);
                }
            };

            requestAnimationFrame(updateNumber);
        }
    }, [isAnimationTriggered]);

    useEffect(() => {
        if (isAnimationTriggered) {
            let start = 0;
            const end = 7;
            const duration = 160; // 5 seconds
            const increment = (end - start) / duration;
            let current = start;

            const updateNumber = () => {
                if (current <= end) {
                    circleRef2.current.textContent = Math.round(current);
                    current += increment;
                    requestAnimationFrame(updateNumber);
                }
            };

            requestAnimationFrame(updateNumber);
        }
    }, [isAnimationTriggered]);

    useEffect(() => {
        if (isAnimationTriggered) {
            let start = 0;
            const end = 100;
            const duration = 160; // 5 seconds
            const increment = (end - start) / duration;
            let current = start;

            const updateNumber = () => {
                if (current <= end) {
                    circleRef3.current.textContent = Math.round(current);
                    current += increment;
                    requestAnimationFrame(updateNumber);
                }
            };

            requestAnimationFrame(updateNumber);
        }
    }, [isAnimationTriggered]);

    return (
        <div>
            <div className='bullets-main' id="bullets-section" ref={bulletsRef}>
                <div className='margin-bullet-div'></div>
                <div className='bullets-row'>
                    <div className='bullet2'></div>
                    <div className='bullet'>
                        <div className='icon-row'>
                            <div className='icon-circle'>
                                <img src={TreeIcon} alt='Tree Icon' />
                            </div>
                            <div className='icon-paragraph'>Tree Services</div>
                        </div>
                        <div className='bullet-paragraph-section'>Our experienced arborists offer professional tree evaluation, trimming, and safe removal when needed, ensuring your property's safety and aesthetics.</div>
                    </div>
                    <div className='bullet'>
                        <div className='icon-row'>
                            <div className='icon-circle'>
                                <img src={GrassIcon} alt='Grass Icon' />
                            </div>
                            <div className='icon-paragraph'>Lawn Perfection</div>
                        </div>
                        <div className='bullet-paragraph-section'>From precise mowing to expert trimming, we shape and maintain your lawn, turning it into a lush, inviting oasis.</div>
                    </div>
                    <div className='bullet'>
                        <div className='icon-row'>
                            <div className='icon-circle'>
                                <img src={ScheduleIcon} alt='Schedule Icon' />
                            </div>
                            <div className='icon-paragraph'>Year-Round Care</div>
                        </div>
                        <div className='bullet-paragraph-section'>Our seasonal maintenance plans cover both your trees and lawn, guaranteeing a harmonious outdoor space that evolves with the seasons.</div>
                    </div>
                    <div className='bullet2'></div>

                </div>



            </div>
            <div className='climber-bullet'>
                <div className='climber-layout'>
                    <div className={`climber-image ${scrolled ? 'animate' : ''}`}>
                        <img className='climbersimg' src={TreeClimber} alt='Climber Img' /> 
                    </div>
                    <div className={`climber-proposition ${scrolled ? 'animate' : ''}`}>
                        <h1 className='climber-proposition-header'>Experienced Climbers: Scaling Heights with Confidence</h1>
                        <p className='climber-proposition-paragraph'>When it comes to conquering heights, our team of experienced climbers stands ready.</p>
                        <div className='climber-proposition-bullets first-circle'>
                            <div className='proposition-circle'></div>
                            <div className='circle-paragraph'>Height is No Obstacle</div>
                        </div>
                        <div className='climber-proposition-bullets'>
                            <div className='proposition-circle'></div>
                            <div className='circle-paragraph'>Safety First</div>
                        </div>
                        <div className='climber-proposition-bullets'>
                            <div className='proposition-circle'></div>
                            <div className='circle-paragraph'>Comprehensive Solutions</div>
                        </div>

                        <div className='numbers-row'>
                            <div className='numbers-item margin-item'>
                                <div className='numbers-div'><div className='number' ref={circleRef}>0</div><div className='number'>+</div></div>
                                <div className='numbers-type'>FINISHED PROJECTS</div>
                            </div>

                            <div className='numbers-item margin-item'>
                            <div className='numbers-div'><div className='number' ref={circleRef2}>0</div><div className='number'>+</div></div>
                                <div className='numbers-type'>YEARS OF EXPERIENCE</div>
                            </div>

                            <div className='numbers-item'>
                            <div className='numbers-div'><div className='number' ref={circleRef3}>0</div><div className='number'>%</div></div>
                                <div className='numbers-type'>COMPREHENSIVE SOLUTIONS</div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Bullets;