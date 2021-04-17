import React, { useContext } from 'react'


export default function NavBar () {
  return (
    <>
    <header>
        <img className="logo" src="https://www.pinclipart.com/picdir/big/558-5584541_vidmob-logo-clipart.png" alt="logo" />
        <nav>
        <ul className="navbar">
            <li><a href="#">Home</a></li>
            <li><a href="#">Change Username</a></li>
            <li><a href="#">Change Look</a></li>
            <li><a href="#">Calculator</a></li>
        </ul>
      </nav>
      <input type='submit' value="Contact" className='navButton'/>
    </header>
    </>
  )
}