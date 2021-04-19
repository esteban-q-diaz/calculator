import React, { useState, useContext } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { ThemeContext } from './App'

export default function Header () {
  const { user, setUser } = useContext(ThemeContext)
  const [userName, setUsername] = useState('')

  console.log(user)
  return (
    <>
      <div className="headerText">
        <div className="homeImg">
        <img src="https://images.unsplash.com/photo-1611125832047-1d7ad1e8e48f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2550&q=80"/>
        </div>
        <p> The calculator handles <br/><span>Multiplication, Division, Addition, and Subtraction.</span>  <br/> <br/>Using <br/><span>Integers and Decimals.</span><br/><br/>  Follows the order of opertaions<br/><span>Parentheses, Multiplication, Division, Addition, Subtraction (no exponents)</span> <br/> <br/> <span>Generates accurate results </span><br/>
        </p>
        <p1>You can collect your calculated  results by saving them! <br/>note: saved
        calculations will be removed when page is refreshed </p1>
        <h1 className="selectUser">Start by choosing a Username</h1>
        <input type="text" placeholder="Type Username"  className="calculatorInput"  value={userName} onChange={(e)=>{setUsername(e.target.value)} }/>
        <input type="submit" value="Submit" className="nameInput btn" onClick={()=>{setUser(userName); alert(`Thank you, ${userName}`)}}/>

        <h1 className="useCalc">Click below to start calulating</h1>
        <Link to='/calculator'><input type="submit" value="Go to Calculator" className="startCalc btn" /></Link>
        
      </div>

    </>
  )
}