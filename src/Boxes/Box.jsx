import React from "react"
import './Boxes.css'

export default function Box(props) {
    const [on, setOn] = React.useState(props.on)
    /**
     * Challenge: Create state controlling whether
     * this box is "on" or "off". Use the incoming
     * `props.on` to determine the initial state.
     * 
     * Create an event listener so when the box is clicked,
     * it toggles from "on" to "off".
     * 
     * Goal: clicking each box should toggle it on and off.
     */
    const styles = {
        backgroundColor: on ? "#222222" : "transparent"
    }
    
    function toggle() {
        setOn(prevOn => !prevOn)
    }
    
    return (
        <div style={styles} className="box" onClick={toggle}></div>
    )
}