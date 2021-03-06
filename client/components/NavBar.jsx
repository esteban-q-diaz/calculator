import React from 'react';
import { Link } from 'react-router-dom';

export default function NavBar() {
  return (
    <>
      <header>
        <img
          className="logo"
          src="https://www.pinclipart.com/picdir/big/558-5584541_vidmob-logo-clipart.png"
          alt="logo"
        />
        <nav>
          <ul className="navbar">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/saved">Saved Calculations</Link></li>
            <li><Link to="/calculator">Calculator</Link></li>
          </ul>
        </nav>
        <input type="submit" value="Contact" className="btn" />
      </header>
    </>
  );
}
