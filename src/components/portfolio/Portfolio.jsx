import React from "react";
import "./portfolio.css";
import profImg1 from "../../assets/img/prof-img-1.png";
import profImg2 from "../../assets/img/prof-img-2.png";
import profImg3 from "../../assets/img/prof-img-3.png";
import profImg4 from "../../assets/img/prof-img-4.png";
import profImg5 from "../../assets/img/prof-img-5.png";
import profImg6 from "../../assets/img/prof-img-6.png";

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-box">
        <article className="portfolio-item">
          <div className="portfolio-item__image">
            <img src={profImg1} alt="prof-img-1" />
          </div>
          <h3>Landing 'Oxford Game'</h3>
          <div className="portfolio-item__cta">
            <a
              className="btn"
              target="blank"
              href="https://github.com/mudmykola/game-oxford"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              target="blank"
              href="http://game-oxford.surge.sh/"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item__image">
            <img src={profImg2} alt="prof-img-2" />
          </div>
          <h3>Landing page 'Burger'</h3>
          <div className="portfolio-item__cta">
            <a
              className="btn"
              target="blank"
              href="https://github.com/mudmykola/lending-burger-2.0"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              target="blank"
              href="http://landing-burger.surge.sh/"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item__image">
            <img src={profImg3} alt="prof-img-3" />
          </div>
          <h3>Landing page 'Mud web'</h3>
          <div className="portfolio-item__cta">
            <a
              className="btn"
              target="blank"
              href="https://github.com/mudmykola/mud-page"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              target="blank"
              href="https://mudmykola.github.io/mud-page/"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item__image">
            <img src={profImg4} alt="prof-img-4" />
          </div>
          <h3>Landing 'Seller pamp'</h3>
          <div className="portfolio-item__cta">
            <a
              className="btn"
              target="blank"
              href="https://github.com/mudmykola/seller-pump"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              target="blank"
              href="http://seller-pump.surge.sh/"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item__image">
            <img src={profImg5} alt="prof-img-5" />
          </div>
          <h3>Landing page 'Spider'</h3>
          <div className="portfolio-item__cta">
            <a
              className="btn"
              target="blank"
              href="https://github.com/mudmykola/spider-landing"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              target="blank"
              href="http://spider-landing.surge.sh/"
            >
              Live Demo
            </a>
          </div>
        </article>
        <article className="portfolio-item">
          <div className="portfolio-item__image">
            <img src={profImg6} alt="prof-img-6" />
          </div>
          <h3>Landing 'Task manager'</h3>
          <div className="portfolio-item__cta">
            <a
              className="btn"
              target="blank"
              href="https://github.com/mudmykola/vue-task-manager"
            >
              GitHub
            </a>
            <a
              className="btn btn-primary"
              target="blank"
              href="http://vue-task-manager.surge.sh/"
            >
              Live Demo
            </a>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Portfolio;
