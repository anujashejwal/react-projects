import React from "react"
import Box from "./Box"
import boxdata from "./boxdata"
import './Boxes.css'

export default function BoxesPage() {
    const [squares, setSquares] = React.useState(boxdata)
    
    function toggle(id) {
    //IMPERATIVE METHOD
    // setSquares(prevSquares=>{
    //     const newSquares=[]
    //     for (let i=0;i<prevSquares.length;i++){
    //         const currentSquare=prevSquares[i]
    //         if(currentSquare.id===id){
    //             const updatedSquare={
    //                 ...currentSquare,
    //                 on:!currentSquare.on
    //             }
    //             newSquares.push(updatedSquare)
    //         }
    //         else{
    //             newSquares.push(currentSquare)
    //         }
    //     }
    //     return newSquares

    // })

    //DECLARATIVE METHOD
    setSquares(prevSquares => {
        return prevSquares.map((square) => {
            return square.id === id ? {...square, on: !square.on} : square
        })
    })
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
