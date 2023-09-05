import React from 'react'
import Joke from './Joke'
import jokesData from './jokesData'
import './Jokes.css'

export default function JokesPage() {
    const jokeElements = jokesData.map(joke => {
        return (
            <Joke 
                key={joke.id}
                setup={joke.setup} 
                punchline={joke.punchline} 
            />
        )
    })
    return (
        <div className='jokespage'>
            {jokeElements}
        </div>
    )
}
