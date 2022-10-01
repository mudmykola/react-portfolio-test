import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/img/me.png'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header id='home'>
      <div className="container header-box">
        <h5>Hello I`am</h5>
        <h1>Mykola Mud</h1>
        <h5 className='text-light'>Junior Front-End Engineer</h5>
        <CTA/>
        <HeaderSocial/>
        <div className="me">
          <img src={ME} alt="me" />
        </div>
        <a className='scroll-down' href="#contact">Scroll Down</a>
      </div>
    </header>
  )
}

export default Header