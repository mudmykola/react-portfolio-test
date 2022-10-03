import React from "react";
import "./contact.css";
import { MdOutlineMail } from "react-icons/md";
import { TbBrandTelegram } from "react-icons/tb";
import { BsTelephoneInbound } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Toch</h5>
      <h2>Contact Me</h2>

      <div className="container contact-box">
        <div className="contact-box__options">
          <article className="contact-box__option">
            <MdOutlineMail className="contact-box__icon" />
            <h4>Email</h4>
            <h5>mykola.mud@gmail.com</h5>
            <a href="mailto:mykola.mud@gmail.com" target="blank">
              Send message
            </a>
          </article>
          <article className="contact-box__option">
            <TbBrandTelegram className="contact-box__icon" />
            <h4>Telegram</h4>
            <h5>mudwebdev</h5>
            <a href="https://t.me/mudwebdev" target="blank">
              Send message
            </a>
          </article>
          <article className="contact-box__option">
            <BsTelephoneInbound className="contact-box__icon" />
            <h4>Phone</h4>
            <h5>+38(097)80-27-062</h5>
            <a href="tel:+380978027062">Call up</a>
          </article>
        </div>
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="Your Full Name"
            required
          ></input>
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
          ></input>
          <textarea
            name="message"
            rows="7"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
