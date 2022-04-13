import React from 'react'
import "./CallToAction.css"
import { FiCode } from 'react-icons/fi'

function CallToAction() {
  return (
    <div className='cta-bg'>
        <div className="overlay"></div>
        <div className="container">
            <div className="cta-text">
                <FiCode className='FiCode'/>
                <h2>We're react dev team</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam aliquid quibusdam vitae necessitatibus voluptatem ex repudiandae officiis culpa illum autem rem praesentium nam eos sint, adipisci itaque, nostrum harum hic.</p>
                <a href="#" className='cta-btn'>get to know us</a>
            </div>
        </div>
    </div>
  )
}

export default CallToAction