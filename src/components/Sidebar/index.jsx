import "./style.scss";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faEnvelope, faPaperPlane, faSuitcase, faBars, faClose } from "@fortawesome/free-solid-svg-icons";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";


const Sidebar = () => {
    const [showNav, setShowNav] = useState(false);
    const openNavHandler = (e) => {
        setShowNav(true)
    }
    const closeNavHandler = (e) => {
        setShowNav(false)
    }

    return (
        <div className="nav-bar">
            <nav className={showNav ? "mobile-nav" : " "}>
                <FontAwesomeIcon 
                icon={faClose} 
                size="3x"
                color="#ffd700"
                className="hamburger-bars"
                onClick={closeNavHandler}/>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/" onClick={closeNavHandler}>
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about" onClick={closeNavHandler}>
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="portfolio-link" to="/portfolio" onClick={closeNavHandler}>
                    <FontAwesomeIcon icon={faSuitcase} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact" onClick={closeNavHandler}>
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
                onClick={openNavHandler} />
        </div>
    )
}

export default Sidebar;