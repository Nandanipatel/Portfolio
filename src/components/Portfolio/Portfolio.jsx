import React from "react";
import "./Portfolio.css";
import IMG1 from "../../assets/twitter.png";
import IMG2 from "../../assets/todo.png";
import IMG3 from "../../assets/weather.png";
import IMG4 from "../../assets/portfolio.png";

const data = [
  {
    id: 1,
    image: IMG1,
    title: "Twitter clone",
    github: "https://github.com/Nandanipatel/Twitter-clone-ReactJS",
  },
  {
    id: 2,
    image: IMG2,
    title: "ToDo App",
    github: "https://github.com/Nandanipatel/ToDo-application-",
  },
  {
    id: 3,
    image: IMG3,
    title: "Weather forecast",
    github: "https://github.com/Nandanipatel/Weather",
  },
  {
    id: 4,
    image: IMG4,
    title: "Portfolio Site",
    github: "https://github.com/Nandanipatel/Portfolio",
  },
];

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My recent Works</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {data.map(({ id, image, title, github }) => {
          return (
            <article key={id} className="portfolio_items">
              <div className="portfolio_item-image">
                <img src={image} alt={title} />
              </div>
              <h3>{title}</h3>
              <div className="portfolio_item-cta">
                <a href={github} className="btn" target="_blank">
                  Github
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
