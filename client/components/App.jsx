import React, { useState, useContext } from 'react'
import { Route, BrowserRouter as Router, Switch, useLocation, withRouter } from 'react-router-dom';
import Calculator from './Calculator'
import NavBar from './NavBar'
import Header from './Header'
import Username from './Username'

export const ThemeContext = React.createContext()

export default function App () {
  const [user, setUser] = useState('VidMob Guest')

  return (
    <div>
      <ThemeContext.Provider value={user}>
        <Router>
          <Switch>
            <Route path='/' exact>
              <NavBar />
              <Header />
              <Calculator />
            </Route>
          </Switch>

          <Switch>
            <Route path='/calculator' exact>
              <NavBar />
              <Header />
              <Calculator />
            </Route>
          </Switch>

          <Switch>
            <Route path='/username' exact>
              <NavBar />
              <Header />
              <Username />
            </Route>
          </Switch>

          <Switch>
            <Route path='/saved' exact>
              <NavBar />
              <Header />
              <Username />
            </Route>
          </Switch>

        </Router>
      </ThemeContext.Provider>
    </div>
  )
}