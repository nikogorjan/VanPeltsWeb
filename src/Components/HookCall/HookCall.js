import React from 'react'
import Worker from '../../Resources/Images/crew2.png'
import './HookCall.css'

const HookCall = () => {
    const goToContact = () => {
        document.querySelector('.the-slider').style.right = '0';
        console.log('working')
        setTimeout(() => {
            window.location.href = '/Contact';
        }, 1000); // 1000 milliseconds = 1 second
    
    
    };
  return (
    <div className='real-main'>
    <div className='hookcall-main'>
      <div className='hookcall-left'>
        <div className='hoocall-wrapper'><h1 className='hookcall-header'>Swift Response to Your Tree Service and Landscaping Needs</h1>
        <p className='hookcall-paragraph'> We understand that your time is valuable, and our goal is to meet your needs with speed and precision, ensuring your outdoor spaces are beautifully maintained and safe.</p>
        <button className='hook-button hookcallbutton' onClick={goToContact}>Contact</button>
        </div>
      </div>
      <div className='hookcall-right'>
        <img src={Worker} alt="Climbing Vector" className='vector-img' />
      </div>
    </div></div>
  )
}

export default HookCall
