import React, { useContext } from 'react'
import Calculator from './Calculator'
import NavBar from './NavBar'
import Header from './Header'

// export const ThemeContext = React.createContext()

export default function App () {
  return (
    <div>
      {/* <ThemeContext.Provider> */}
        <NavBar />
        <Header />
        <Calculator />
      {/* </ThemeContext.Provider> */}
    </div>
  )
}