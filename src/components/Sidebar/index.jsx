import "./style.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faPaperPlane, faSuitcase, faBars } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const clickHandler = (e) => {
        setShowNav(true)
    }

    return (
        <div className="nav-bar">
            <nav className={showNav ? "mobile-nav" : " "}>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio">
                    <FontAwesomeIcon icon={faSuitcase} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/zumrud-nerman/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ZuuZaa" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://telegram.me/Userzuza/" target="_blank" rel="noreferrer">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </a>
                </li>
            </ul>
            <FontAwesomeIcon
                icon={faBars}
                size="3x"
                color="#ffd700"
                className="hamburger-bars"
                onClick={clickHandler} />
        </div>
    )
}

export default Sidebar;