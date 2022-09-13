import AnimatedLetters from "components/AnimatedLetters";
import { useEffect, useState } from "react";
import "./style.scss";

const Contact = () => {

    const [letterClass, setLetterClass] = useState("text-animated");
    const strAttay = ['C', 'o', 'n', 't', 'a', 'c ','t',' ', 'm', 'e'];

    useEffect(() => {
        setTimeout(() => {
            setLetterClass("text-animated-hover")
        }, 3000)
    });
    return (
        <div className="main-container contact-page">
            <div className="text-zone">
                <h1>
                    <AnimatedLetters strArray={strAttay} letterClass={letterClass} index={15} />
                </h1>
            </div>
        </div>
    )
}

export default Contact;