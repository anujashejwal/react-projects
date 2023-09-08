import React from "react"
import "./InfoSite.css"

export default function InfoSiteMain(props) {
    return (
        <main className={props.darkMode ? "dark" : ""}>
            <h1 className="info-site-main--title">Fun facts about React</h1>
            <ul className="info-site-main--facts">
                <li>Was first released in 2013</li>
                <li>Was originally created by Jordan Walke</li>
                <li>Has well over 100K stars on GitHub</li>
                <li>Is maintained by Facebook</li>
                <li>Powers thousands of enterprise apps, including mobile apps</li>
            </ul>
        </main>
    )
}