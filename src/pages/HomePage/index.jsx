import "./style.scss";
import Logo from "assets/images/logo.svg";
import { Link } from "react-router-dom";
import AnimatedLetters from "components/AnimatedLetters";
import { useEffect, useState } from "react";
import Profil from "assets/images/profil.gif";

const Home = () => {

    const [letterClass, setLetterClass] = useState("text-animated");
    const jobStrArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animated-hover")
        }, 4000)
    });

    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    <span className={letterClass} >H</span>
                    <span className={`${letterClass} _12`}>i,</span>
                    <br />
                    <span className={`${letterClass} _13`}>I</span>
                    <span className={`${letterClass} _14`}>'m</span>
                    <img src={Logo} alt="developer" />
                    <br />
                    <AnimatedLetters letterClass={letterClass} strArray={jobStrArray} index={15} />
                </h1>
                <h2>Frontend / JavaScript / ReactJs </h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;
