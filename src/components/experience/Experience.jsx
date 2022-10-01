import React from 'react'
import './experience.css'
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>

      <div className="container experience-box">
        <div className="experience-frontend">
          <h3>Front-End Skills</h3>
          <div className="experience-content">
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>HTML</h4>
                  <p className='text-light'>Intermediate</p>
                </div>
              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>CSS</h4>
                  <p className='text-light'>Intermediate</p>
                </div>

              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>SCSS</h4>
                  <p className='text-light'>Intermediate</p>
                </div>

              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>JavaScript</h4>
                  <p className='text-light'>Experienced</p>
                </div>

              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>Jquery</h4>
                  <p className='text-light'>Intermediate</p>
                </div>

              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>PUG</h4>
                  <p className='text-light'>Experienced</p>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="experience-libs">
          <h3>Developer Libraries</h3>
          <div className="experience-content">
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>NPM</h4>
                  <p className='text-light'>Experienced</p>
                </div>
              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>VUE</h4>
                  <p className='text-light'>Basic</p>
                </div>
              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>GULP</h4>
                  <p className='text-light'>Intermediate</p>
                </div>
              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>Webpack</h4>
                  <p className='text-light'>Experienced</p>
                </div>
              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon" />
                <div>
                  <h4>Animate css</h4>
                  <p className='text-light'>Experienced</p>
                </div>
              </div>
            </article>
            <article>
              <div className="experience-details">
                <BsPatchCheckFill className="experience-details__icon"  />
                <div>
                  <h4>React</h4>
                  <p className='text-light'>Basic</p>
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>

    </section>
  )
}

export default Experience