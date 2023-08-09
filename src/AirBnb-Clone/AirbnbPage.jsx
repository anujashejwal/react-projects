
import React from "react"
import './Airbnb.css'
import AirbnbNavbar from './AirbnbNavbar'
import Hero from './Hero'
import Card from "./Card"
import data from "./data"

export default function AirbnbPage(props) {
  console.log(props.openSpots)
  const cards = data.map(item => {
    return (
      <Card
        key={item.id}
        {...item} 
        /*spread object as a props*/
      />
  )
})        

  return (
    <div>
      <AirbnbNavbar />
      <Hero/>
        <section className="cards-list">
            {cards}
        </section>
    </div>
      
  )
}
