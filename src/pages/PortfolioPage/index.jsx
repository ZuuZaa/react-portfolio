import AnimatedLetters from "components/AnimatedLetters";
import { useEffect, useState } from "react";
import "./style.scss";

const Portfolio = () => {

    const [letterClass, setLetterClass] = useState('text-animated')
    const strAttay = "Portfolio".split("")
  
    useEffect(() => {
      setTimeout(() => {
        setLetterClass('text-animated-hover')
      }, 3000)
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
            </div>
    )
}

export default Portfolio;