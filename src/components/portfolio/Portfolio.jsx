import React from "react";
import "./portfolio.css";
import profImg1 from "../../assets/img/prof-img-1.png";
import profImg2 from "../../assets/img/prof-img-2.png";
import profImg3 from "../../assets/img/prof-img-3.png";
import profImg4 from "../../assets/img/prof-img-4.png";
import profImg5 from "../../assets/img/prof-img-5.png";
import profImg6 from "../../assets/img/prof-img-6.png";

const data = [
  {
    id: 1,
    image: profImg1,
    title: "Landing 'Oxford Game'",
    github: "https://github.com/mudmykola/game-oxford",
    demo: "http://game-oxford.surge.sh/",
  },
  {
    id: 2,
    image: profImg2,
    title: "Landing page 'Burger'",
    github: "https://github.com/mudmykola/lending-burger-2.0",
    demo: "http://landing-burger.surge.sh/",
  },
  {
    id: 3,
    image: profImg3,
    title: "Landing page 'Mud web'",
    github: "https://github.com/mudmykola/mud-page",
    demo: "https://mudmykola.github.io/mud-page/",
  },
  {
    id: 4,
    image: profImg4,
    title: "Landing 'Seller pamp'",
    github: "https://github.com/mudmykola/seller-pump",
    demo: "http://seller-pump.surge.sh/",
  },
  {
    id: 5,
    image: profImg5,
    title: "Landing page 'Spider'",
    github: "https://github.com/mudmykola/spider-landing",
    demo: "http://spider-landing.surge.sh/",
  },
  {
    id: 6,
    image: profImg6,
    title: "Landing page 'Mud web'",
    github: "https://github.com/mudmykola/vue-task-manager",
    demo: "http://vue-task-manager.surge.sh/",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio-box">
        {data.map(({ id, image, title, github, demo }) => {
          return (
            <article key={id} className="portfolio-item">
              <div className="portfolio-item__image">
                <img src={image} alt="{title}" />
              </div>
              <h3>{title}</h3>
              <div className="portfolio-item__cta">
                <a className="btn" target="blank" href={github}>
                  GitHub
                </a>
                <a className="btn btn-primary" target="blank" href={demo}>
                  Live Demo
                </a>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default Portfolio;
