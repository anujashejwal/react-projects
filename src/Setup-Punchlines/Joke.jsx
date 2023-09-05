import React from "react"
import "./Jokes.css"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)
    function toggleShown(){
        setIsShown(prevShown => !prevShown)
    }
    return (
        <div className="jokes-display">
            {props.setup && <h3 className="jokes-setup">{props.setup}</h3>}
            {isShown && <p className="jokes-punchline">{props.punchline}</p>}
            <button className="jokes-button" onClick={toggleShown}>{isShown ? "Hide": "Show"} Punchline</button>
            <hr />
        </div>
    )
}
