import React from "react"
import './pets.css'
export default function Contact(props) {
    console.log(props)
    return (
        <div className="contact-card">
            <img src={props.img}/>
            <div className="pet-info">
            <h3>{props.name}</h3>
            <div className="info-group">
                <img src="./images/phone-icon.png" />
                <p>{props.phone}</p>
            </div>
            <div className="info-group">
                <img src="./images/mail-icon.png" />
                <p>{props.email}</p>
            </div>
            </div>
        </div>
    )
}