import AnimatedCube from 'components/AnimatedCube';
import AnimatedLetters from 'components/AnimatedLetters'
import { useEffect, useState } from 'react';
import './style.scss'

const About = () => {

    const [letterClass, setLetterClass] = useState("text-animated");
    const strAttay = ['A', 'b', 'o', 'u', 't', ' ', 'm', 'e', '.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animated-hover")
        }, 3000)
    });

    return (
        <div className="main-container about-page">
                <div className="text-zone">
                    <h1>
                        <AnimatedLetters strArray={strAttay} letterClass={letterClass} index={15} />
                    </h1>
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
                </div>
                <AnimatedCube/>
        </div>
    )
}

export default About
