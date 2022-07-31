import "./style.scss";
import Logo from "../../assets/images/logo.svg"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaperPlane, faUser, faGithub, faLinkedin, faCode } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="logo">
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeClassName="active" className="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faCode} />
                </NavLink>
                <NavLink exact="true" activeClassName="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faPaperPlane} />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/zumrud-nerman/">
                        <FontAwesomeIcon icon="fa-brands fa-linkedin" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://github.com/ZuuZaa">
                        <FontAwesomeIcon icon="fa-brands fa-github" fontSize="20px" />
                    </a>
                </li>
                <li>
                    <a target="_blank" href="https://www.linkedin.com/in/zumrud-nerman/">
                        <FontAwesomeIcon icon="fa-brands fa-telegram" />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;