import "./style.scss";
import Logo from "../../assets/images/logo.svg"
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faPaperPlane, faUser, faRectangleHistory, faFileCode, faCode } from "@fortawesome/free-solid-svg-icons";

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
        </div>
    )
}

export default Sidebar;