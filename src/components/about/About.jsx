import React from 'react'
import './about.css'
import ME from '../../assets/img/me-about.png'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about-box">
          <div className="about-me">
            <div className="about-me__image">
              <img src={ME} alt="me-about" />
            </div>
          </div>
      </div>
    </section>
  )
}

export default About