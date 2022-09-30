import React from 'react'
import {BsLinkedin, BsGithub,BsTwitter} from 'react-icons/bs'


const HeaderSocial = () => {
  return (
    <div className='header-social'>
        <a href="https://www.linkedin.com/in/mud-developer/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/mudmykola" target="_blank"><BsGithub/></a>
        <a href="https://twitter.com/mud_web_dev" target="_blank"><BsTwitter/></a>
    </div>
  )
}

export default HeaderSocial