import AnimatedLetters from "components/AnimatedLetters";
import { useEffect, useState } from "react";
import { portfolioData } from "data/portfolio";
import "./style.scss";
import Card from "components/Card";

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
        {portfolioData.map((item, index) => (
          <Card item={item} key={index}/>
        ))}
      </div>
    </div>
  )
}

export default Portfolio;