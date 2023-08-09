import React from "react"
import './pets.css'
import Contacts from "./PetContacts"
export default function PetsPage() {
    return (
        <div className="pets-main-page">
        <div className="contacts">
            <Contacts
                img="./images/bandya.jpg" 
                name="Mr. Bandya"
                phone="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
            />
            <Contacts 
                img="./images/mangya.jpg"
                name="Mr. Mangya"
                phone="(212) 555-2345"
                email="fluff@me.com"
            />
            <Contacts 
                img="./images/mrkoli.jpg"
                name="Mr. Koala"
                phone="(212) 555-4567"
                email="thecat@hotmail.com"
            />
            <Contacts
                img="./images/mrpande.jpg"
                name="Mr. Pandu"
                phone="(0800) CAT KING"
                email="pumpkin@scrimba.com"
            />
        </div>
        </div>
    )
}

