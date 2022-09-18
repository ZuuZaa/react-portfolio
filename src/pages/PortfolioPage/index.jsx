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
      <span className="tags">&lt;h1&gt;</span>
      <h1>
        <AnimatedLetters
          strArray={strAttay}
          letterClass={letterClass}
          index={15}
        />
      </h1>
      <span className="tags">&lt;/h1&gt;</span>
      <div className="portfolio-container">
        {portfolioData.map(item => (
          <div className="portfolio-wrapper" key={item.key}>
            <img src={item.cover} alt="" />
            {item.key}
      
          </div>
        ))}
      </div>
    </div>
  )
}

export default Portfolio;