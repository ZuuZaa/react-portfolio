import "./style.scss";
import Logo from "assets/images/logo.svg";
import ProfilPhoto from "assets/images/profil.jpeg";
import { Link } from "react-router-dom";
import AnimatedLetters from "components/AnimatedLetters";
import { useEffect, useState } from "react";
import AnimatedCube from "components/AnimatedCube";

const Home = () => {

    const [letterClass, setLetterClass] = useState("text-animated");
    const jobStrArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animated-hover")
        }, 4000)
    });

    return (
        <div className="main-container home-page">
            <div className="text-zone">
                <span className="tags">&lt;h1&gt;</span>
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
                <span className="tags">&lt;/h1&gt;</span>
                <h2>Frontend / JavaScript / ReactJs </h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
            <div className="image-zone">
                <img src={ProfilPhoto} alt="profil photo" />
            </div>
        </div>
    )
}

export default Home;
