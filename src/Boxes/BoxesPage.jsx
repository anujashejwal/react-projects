import React from "react"
import Box from "./Box"
import boxdata from "./boxdata"
import './Boxes.css'

export default function BoxesPage() {
    const [squares, setSquares] = React.useState(boxdata)
    
    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
    }
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            id={square.id}
            on={square.on} 
            toggle={toggle}
        />
    ))
    
    return (
        <main>
            
            {squareElements}
        </main>
    )
   
}
