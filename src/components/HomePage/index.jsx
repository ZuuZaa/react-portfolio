import "./style.scss";
import Logo from "assets/images/logo.svg";
import { Link } from "react-router-dom";

const Home = () => {
    return(
        <div className="container home-page">
            <div className="text-zone">
                <h1>
                    Hi, <br/> I'm 
                </h1>
                <img src={Logo} alt="developer" />
                <h2>Frontend Developer.</h2>
                <Link to="/contact" className="flat-button">Contact Me</Link>
            </div>
        </div>
    )
}

export default Home;
