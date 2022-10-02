import React from "react";
import "./services.css";
import { BiCheck } from "react-icons/bi";

const Services = () => {
  return (
    <section id="services">
      <h5>What I Offer</h5>
      <h2>Services</h2>
      <div className="container services-box">
        {/*uxui */}
        <article className="service">
          <div className="service-head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list__icon" />
              <p>Website and mobile application design.</p>
            </li>
            <li>
              <BiCheck className="service-list__icon" />
              <p>I will develop a clear and user-friendly interface.</p>
            </li>
            <li>
              <BiCheck className="service-list__icon" />
              <p>I will choose the color scheme and font pair.</p>
            </li>
          </ul>
        </article>
        {/*web dev*/}
        <article className="service">
          <div className="service-head">
            <h3>Web Development</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list__icon" />
              <p>Web development, adaptation and integration on wordpress.</p>
            </li>
            <li>
              <BiCheck className="service-list__icon" />
              <p>Using modern technology, and writing clean and valid code.</p>
            </li>
          </ul>
        </article>
        {/*digital marketing */}
        <article className="service">
          <div className="service-head">
            <h3>Digital Marketing</h3>
          </div>
          <ul className="service-list">
            <li>
              <BiCheck className="service-list__icon" />
              <p>
                I have a clear plan for the development and promotion of your
                product.
              </p>
            </li>
            <li>
              <BiCheck className="service-list__icon" />
              <p>Additionally, I will develop a layout and write code.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
