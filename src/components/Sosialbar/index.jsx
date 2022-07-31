import "./style.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";


const Sosialbar = () => {
    return (
        <div className="sosial-links">
            <ul>
                <li>
                    <a href="https://www.linkedin.com/in/zumrud-nerman/" target="_blank">
                        <FontAwesomeIcon icon={faLinkedinIn} />
                    </a>
                </li>
                <li>
                    <a href="https://github.com/ZuuZaa" target="_blank">
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/zumrud-nerman/" target="_blank">
                        <FontAwesomeIcon icon={faPaperPlane} />
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sosialbar;


