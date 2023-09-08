import React from "react"
import "./InfoSite.css"
import InfoSiteNavbar from "./InfoSiteNavbar"
import InfoSiteMain from "./InfoSiteMain"

export default function InfoSitePage() {
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
    
    return (
        <div className="info-site-container">
            <InfoSiteNavbar
                darkMode={darkMode} 
                toggleDarkMode={toggleDarkMode}
            />
            <InfoSiteMain darkMode={darkMode} />
        </div>
    )
}