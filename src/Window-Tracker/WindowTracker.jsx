import React from "react"
import './WindowTracker.css'

export default function WindowTracker() {
    
    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    React.useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])
    
    return (
        <>
        <h1 className="window-tracker-h1">Window width: {windowWidth}</h1>
        <h3 className="window-tracker-h3">Note : Please maximize or minimize your window to check the width </h3>
        </>
        
    )
}
