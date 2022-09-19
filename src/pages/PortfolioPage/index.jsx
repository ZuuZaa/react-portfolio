import AnimatedLetters from "components/AnimatedLetters";
import { useEffect, useState } from "react";
import { portfolioData } from "data/portfolio";
import "./style.scss";

const Portfolio = () => {

  const [letterClass, setLetterClass] = useState('text-animated')
  const strAttay = "Portfolio".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animated-hover')
    }, 3000);
    return () => {
      clearTimeout(timer)
    };
  })

  return (
    <div className="portfolio-page">
      <h1>
        <AnimatedLetters
          strArray={strAttay}
          letterClass={letterClass}
          index={15}
        />
      </h1>
      <div className="portfolio-container">
        {portfolioData.map(item => (
          <div className="portfolio-card" key={item.key}>
            <img src={item.cover} alt="cover" className="portfolio-cover" />
            <div className="content">
              <div className="content-header">
                <div className="card-title">{item.title}</div>
                <ul className="card-description">{item.description.map(item => <li>{item}</li>)}</ul>
              </div>
              <div className="buttons">
                <a href={item.url} target="blank">demo</a>
                <a href={item.repo} target="blank">repo</a>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio;