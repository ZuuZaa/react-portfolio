import AnimatedCube from 'components/AnimatedCube'
import AnimatedLetters from 'components/AnimatedLetters'
import { useEffect, useState } from 'react'
import CV from 'assets/pdf/cv.pdf'
import './style.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDownload } from '@fortawesome/free-solid-svg-icons'

const About = () => {
  const [letterClass, setLetterClass] = useState('text-animated')
  const strAttay = "About me".split("")

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animated-hover')
    }, 3000);
    return () => {
      clearTimeout(timer)
    };
  })

  return (
    <div className="main-container about-page">
      <div className="text-zone">
        <span className="tags">&lt;h1&gt;</span>
        <h1>
          <AnimatedLetters
            strArray={strAttay}
            letterClass={letterClass}
            index={15}
          />
        </h1>
        <span className="tags">&lt;/h1&gt;</span>
        <p>
          I'm ambitious front-end developer looking for a role in established IT
          company with the opportunity to work with the latest technologies on
          challenging and diverse projects.
        </p>
        <p>
          I'm quietly confident, naturally curious and perpetually working on
          improving my chops one design problem at a time.
        </p>
        <p>
          If I need to define myself in one sentence that would be a good
          listener, patient, nature lover, mentally stable, open to learning and
          innovation.
        </p>
        <a href={CV} download="Zumrud's_CV" className="download">
          <FontAwesomeIcon icon={faDownload} />
          Download my CV
        </a>
      </div>
      <AnimatedCube />
    </div>
  )
}

export default About
