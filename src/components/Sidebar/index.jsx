import "./style.scss";
import Logo from "../../assets/images/logo.svg"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faCode, faEnvelope } from "@fortawesome/free-solid-svg-icons";


const Sidebar = () => {
    return (
        <div className="nav-bar">
            <Link to="/" className="logo">
                <img src={Logo} alt="logo" />
            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" className="home-link" to="/">
                    <FontAwesomeIcon icon={faHome} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="projects-link" to="/projects">
                    <FontAwesomeIcon icon={faCode} />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} />
                </NavLink>
            </nav>

        </div>
    )
}

export default Sidebar;