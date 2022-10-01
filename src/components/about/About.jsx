import React from 'react'
import './about.css'
import ME from '../../assets/img/me-about.png'
import {AiOutlineProject} from 'react-icons/ai'
import {TbCoffee} from 'react-icons/tb'
import {GoGift} from 'react-icons/go'


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
        <div className="about-content">
          <div className="about-cards">
            <article className="about-card">
              <AiOutlineProject className='about-icon'/>
              <h5>Project Completed</h5>
              <p>50</p>
            </article>
            <article className="about-card">
              <GoGift className='about-icon'/>
              <h5>Satisfied Customers</h5>
              <p>500</p>
            </article>
            <article className="about-card">
              <TbCoffee className='about-icon'/>
              <h5>Cups of Coffee</h5>
              <p>1000</p>
            </article>
            </div>
            <p>
            Hello friends, I am a web developer from Ukraine. Prior to web development, I worked in various fields, but I always liked to understand the code 'look under the hood', so I began to study the structure of writing and the logic of construction. Now I am a Front-end developer, albeit with a little time, but quite well versed in certain issues. 
            </p>
            <a className='btn btn-primary' href="#contact">Let`s Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About