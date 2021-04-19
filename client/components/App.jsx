import React, { useState, useContext } from 'react'
import { Route, BrowserRouter as Router, Switch, useLocation, withRouter } from 'react-router-dom';
import Calculator from './Calculator'
import NavBar from './NavBar'
import Header from './Header'
import Home from './Home'
import Saved from './Saved'

export const ThemeContext = React.createContext()

export default function App () {
  const [user, setUser] = useState('VidMob Guest')
  const [saved, setSaved] = useState([
    { equation: '1+2*8(9+10)-100*80/4', solution: 3 },
    { equation: '1+2', solution: 3 }
    ])
  const [homeHeader, setHomeHeader] = useState({header: 'Calculator Application', caption: 'Hope you enjoy navigating through this page'})
  const [calculatorHeader, setCalculatorHeader] = useState({header: 'VidMob Calculates', caption: 'A functioning calculator is always a good idea'})

  return (
    <div>
      <ThemeContext.Provider value={{user, setUser, saved, setSaved}}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <NavBar />
              <Header greeting={homeHeader}/>
              <Home />
            </Route>
          </Switch>

          <Switch>
            <Route path='/calculator' exact>
              <NavBar />
              <Header greeting={calculatorHeader}/>
              <Calculator />
            </Route>
          </Switch>
{/*
          <Switch>
            <Route path='/username' exact>
              <NavBar />
              <Header />
              <Username />
            </Route>
          </Switch> */}

          <Switch>
            <Route path='/saved' exact>
              <NavBar />
              <Header greeting={calculatorHeader}/>
              <Saved/>
            </Route>
          </Switch>

        </Router>
      </ThemeContext.Provider>
    </div>
  )
}