import React from 'react'
import TitleNavbar from './TitleNavbar'
import TitlePage from './TitlePage'

export default function TitlePageMain() {
    const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }
  return (
    <div>
        {/* <TitleNavbar
            darkMode={darkMode} 
            toggledarkMode={toggleDarkMode}
            />
        <TitlePageMain darkMode={darkMode} /> */}
        {/* <h1>hello</h1> */}
        <TitleNavbar/>
        <TitlePage/>
    </div>
  )
}
