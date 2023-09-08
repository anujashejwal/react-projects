import React from "react"
import "./InfoSite.css"

export default function InfoSiteNavbar(props) {
    return (
         <nav 
            className={props.darkMode ? "dark": ""}
        >
            {/* <img 
                className="nav--logo-icon"
                src="../images/logo.png"
            /> */}
            <h3 className="info-site-nav--logo_text">ReactFacts</h3>
            
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.toggleDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--dark">Dark</p>
            </div>
        </nav>
    )
}