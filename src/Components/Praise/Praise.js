import React from 'react';
import './Praise.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

function Praise() {
    return (
        <div className='praise-main'>
            <div className='praise-layout'>
                <div className='praise-header'>
                    Praise from Our Satisfied Clients
                </div>
                <div className='praise-row'>
                    <div className='praise-praise'>
                        <p className='praise-paragraph'>Andrew was very professional. He came out and did exactly what he said, and showed up when he said he was. My has never looked better, I couldn't be happier with the work that was done. I would recommend his business to anyone who needs this work done. I'm very grateful we found such an excellent pro, an plan to use him any time in the future.
                        </p>

                        <div className='customer-data'>
                            <div className='customer-row'>
                            <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                            <div className='customer-rating'>5.0</div>
                            <p className='customer-name'>Phyllis C.</p>
                            <p className='customer-location'>Dayton, OH</p>
                            </div>
                            <div className='customer-service'>Trim or Remove trees and Scrubs</div>
                        </div>
                        
                    </div>
                    <div className='praise-praise'>
                        <p className='praise-paragraph'>
                        Couldn't ask for better. Fair price. And they did more than I asked without charging extra. Entire crew was courteous and professional. They made quick work of a hard job. They will definitely get my return business, and I would highly recommend them.
                        </p>

                        <div className='customer-data'>
                            <div className='customer-row'>
                            <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                            <div className='customer-rating'>5.0</div>
                            <p className='customer-name'>Jennifer D.</p>
                            <p className='customer-location'>Vandalia, OH</p>
                            </div>
                            <div className='customer-service'>Trim or Remove trees and Scrubs</div>
                        </div>
                        
                        </div>
                    <div className='praise-praise'><p className='praise-paragraph'>
                        The job took longer than they thought,they had to come out the next day to finish up.They did a very good job.They new about the trees and what could be done without hurting the trees.Our neighbors had them do work for them and they also thought they did a good job.I will definitely refer them to my friends.
                        </p>
                        <div className='customer-data'>
                            <div className='customer-row'>
                            <FontAwesomeIcon icon={faStar} className='star-icon' style={{ width: '16px', height: '16px', color: '#384b44' }} />
                            <div className='customer-rating'>5.0</div>
                            <p className='customer-name'>Karen S.</p>
                            <p className='customer-location'>Dayton, OH</p>
                            </div>
                            <div className='customer-service'>Trim Trees</div>
                        </div>
                        
                        </div>
                </div>

                <button className='hook-button customer-margin' onClick={() => {
    window.open('https://www.homeadvisor.com/rated.VanpeltsTreeService.68135705.html', '_blank');
  }}>Read More</button>
            </div>
        </div>
    );
}

export default Praise;