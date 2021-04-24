import React, { useState } from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Calculator from './Calculator';
import NavBar from './NavBar';
import Header from './Header';
import Home from './Home';
import Saved from './Saved';

export const ThemeContext = React.createContext();

export default function App() {
  const [user, setUser] = useState('Guest');
  const [saved, setSaved] = useState([]);
  const [savedHeader, setSavedHeader] = useState({
    header: 'Saved Calculations',
    caption: 'Place where you can store some of your calculations',
  });

  return (
    <div>
      <ThemeContext.Provider value={{
        user,
        setUser,
        saved,
        setSaved,
      }}
      >
        <Router>
          <Switch>
            <Route path="/" exact>
              <NavBar />
              <Home />
            </Route>
          </Switch>

          <Switch>
            <Route path="/saved" exact>
              <NavBar />
              <Header greeting={savedHeader} />
              <Saved />
            </Route>
          </Switch>

          <Switch>
            <Route path="/calculator" exact>
              <NavBar />
              <Calculator />
            </Route>
          </Switch>

        </Router>
      </ThemeContext.Provider>
    </div>
  );
}
