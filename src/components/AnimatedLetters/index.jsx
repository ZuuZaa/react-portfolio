import "./style.scss";

const AnimatedLetters = ({ letterClass, strArray, index }) => {
    return(
        <>
            {strArray.map((char,i)=> (
                <span key={char+i} className={`${letterClass} _${i+index}`}>
                    {char}
                </span>
            ))}
        </>
    )
}

export default AnimatedLetters;